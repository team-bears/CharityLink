const passport = require('passport');
const GraphQLLocalStrategy = require('graphql-passport').GraphQLLocalStrategy;

const User = require('../models/user');

passport.use(new GraphQLLocalStrategy(async (email, password, done) => {
    // Adjust this callback to your needs
    const matchingUsers = await User.find({
        email: email,
        password: password
    });
    if (matchingUsers.length == 1) {
        done(null, matchingUsers[0]);
    } else {
        done(new Error("no matching user"), null);
    }
}));