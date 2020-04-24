const bcrypt = require('bcrypt');
const passport = require('passport');
const GraphQLLocalStrategy = require('graphql-passport').GraphQLLocalStrategy;

const User = require('../models/user');
const Charity = require('../models/charity');

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
            done(new Error("You've entered the wrong password"), null);
        }
    } else {
        done(new Error("Account doesn't exist. Why not sign up for one?"), null);
    }
}));