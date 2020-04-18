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
}).then((succ) => {
    console.log("Connected to database.")
}).catch((err) => {
    console.error(JSON.stringify(err));
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