const bcrypt = require('bcrypt');
const passport = require('passport');
const GraphQLLocalStrategy = require('graphql-passport').GraphQLLocalStrategy;

const User = require('../models/user');
const Charity = require('../models/charity');

const Errortype = require('./../errors/errors').Errortype;
const {
    findAccount
} = require('./utils');


passport.use(new GraphQLLocalStrategy(async (identifier, password, done) => {

    // First we'll try to see if there's a user
    const account = await findAccount(identifier);
    if (account) {
        if (account.password == password) {
            done(null, account);
        } else {
            done(new Error(Errortype.AUTHENTICATION_INCORRECT_PASSWORD), null);
        }
    } else {
        done(new Error(Errortype.AUTHENTICATION_INCORRECT_IDENTIFIER), null);
    }
}));