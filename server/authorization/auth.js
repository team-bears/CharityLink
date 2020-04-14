const passport = require('passport');
const GraphQLLocalStrategy = require('graphql-passport').GraphQLLocalStrategy;

const User = require('../models/user');

passport.use(
    new GraphQLLocalStrategy(async (email, password, done) => {
        // Adjust this callback to your needs
        const matchingUser = await User.find({
            email: email,
            password: password
        });
        const error = matchingUser.length == 1 ? null : new Error("no matching user");
        done(error, matchingUser);
    })
);