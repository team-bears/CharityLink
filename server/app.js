require('dotenv').config();

const express = require('express');
const graphqlHTTP = require('express-graphql');
const session = require('express-session');
const passport = require('passport');
const schema = require('./schema/schema');
const buildContext = require('graphql-passport').buildContext;

require('./authorization/auth');

const mongoose = require('mongoose');
// Connect to mongo db
mongoose.connect(process.env.DB_LINK, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Log once the connection to the db is made
mongoose.connection.once('open', () => {
    console.log('Connected to the database');
});

const app = express();
app.use(session({
    secret: process.env.SESSION_SECRET,
}));

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});
app.use(passport.initialize());
app.use(passport.session());

app.use('/graphql', graphqlHTTP((req, res, User) => ({
    schema,
    graphiql: true,
    context: buildContext({
        req,
        res,
        User
    })
})));

module.exports = app;