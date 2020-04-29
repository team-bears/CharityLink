const express = require('express');
const graphqlHTTP = require('express-graphql');
const session = require('express-session');
const passport = require('passport');
const schema = require('./schema/schema');
const buildContext = require('graphql-passport').buildContext;

const Errortypes = require('./errors/errors').Errortypes;

const cors = require('cors');
require('./authentication/auth');

const mongoose = require('mongoose');
// Connect to mongo db
mongoose.connect(process.env.DB_LINK, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const app = express();
app.use(cors());

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
    }),
    customFormatErrorFn(err) {
        const custom_error = Errortypes[err.message];
        if (custom_error) {
            return ({
                message: custom_error.message,
                type: err.message
            });
        } else
            return err;
    }
})));

module.exports = app;