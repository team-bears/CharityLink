const {
    GraphQLNonNull,
    GraphQLID,
    GraphQLBoolean,
    GraphQLString
} = require("graphql");

const {
    validateEmail,
    validatePassword
} = require('./../../authentication/utils');

const Charity = require('./../../models/charity');

const {
    CharityType
} = require('./../types');

const CharityMutations = {
    signupCharity: {
        type: CharityType,
        args: {
            uid: {
                type: new GraphQLNonNull(GraphQLString)
            },
            name: {
                type: new GraphQLNonNull(GraphQLString)
            },
            profile_picture: {
                type: new GraphQLNonNull(GraphQLString)
            },
            email: {
                type: new GraphQLNonNull(GraphQLString)
            },
            phone: {
                type: new GraphQLNonNull(GraphQLString)
            },
            password: {
                type: new GraphQLNonNull(GraphQLString)
            },
            confirm_password: {
                type: new GraphQLNonNull(GraphQLString)
            }
        },
        resolve: async (parent, args, context) => {
            // Validation

            await validateEmail(args.email);

            validatePassword(args.password, args.confirm_password);

            // TODO: hash password

            let charity = new Charity(args);
            const res = await charity.save();

            return res;
        }
    }
};

module.exports = CharityMutations;