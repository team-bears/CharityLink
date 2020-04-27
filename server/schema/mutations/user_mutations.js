const {
    GraphQLNonNull,
    GraphQLString,
    GraphQLBoolean
} = require("graphql");

const User = require('./../../models/user');

const {
    UserType
} = require('./../types');

const {
    validateEmail,
    validatePassword
} = require('../../authentication/utils');

const UserMutations = {
    signupUser: {
        type: UserType,
        args: {
            first_name: {
                type: new GraphQLNonNull(GraphQLString)
            },
            last_name: {
                type: new GraphQLNonNull(GraphQLString)
            },
            uid: {
                type: new GraphQLNonNull(GraphQLString)
            },
            profile_picture: {
                type: new GraphQLNonNull(GraphQLString)
            },
            email: {
                type: new GraphQLNonNull(GraphQLString)
            },
            dob: {
                type: new GraphQLNonNull(GraphQLString)
            },
            gender: {
                type: new GraphQLNonNull(GraphQLString)
            },
            password: {
                type: new GraphQLNonNull(GraphQLString)
            },
            confirm_password: {
                type: new GraphQLNonNull(GraphQLString)
            }
        },
        resolve: async (parent, args) => {

            // validate email

            await validateEmail(args.email);

            validatePassword(args.password, args.confirm_password);

            args.followsIds = [];
            let user = new User(args);
            const res = await user.save();
            return res;
        }
    },
}

module.exports = UserMutations;