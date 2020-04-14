const CJSON = require('flatted');
const {
    GraphQLNonNull,
    GraphQLString,
    GraphQLBoolean
} = require("graphql");

const User = require('./../../models/user');

const {
    UserType
} = require('./../types');


const UserMutations = {
    signup: {
        type: UserType,
        args: {
            first_name: {
                type: new GraphQLNonNull(GraphQLString)
            },
            last_name: {
                type: new GraphQLNonNull(GraphQLString)
            },
            dob: {
                type: new GraphQLNonNull(GraphQLString)
            },
            email: {
                type: new GraphQLNonNull(GraphQLString)
            },
            password: {
                type: new GraphQLNonNull(GraphQLString)
            }
        },
        resolve: (parent, args) => {
            args.followsIds = [];
            let user = new User(args);
            user.save();
            return user;
        }
    },
    login: {
        type: UserType,
        args: {
            email: {
                type: new GraphQLNonNull(GraphQLString)
            },
            password: {
                type: new GraphQLNonNull(GraphQLString)
            }
        },
        resolve: async (parent, {
            email,
            password
        }, context) => {
            const {
                user
            } = await context.authenticate("graphql-local", {
                email,
                password
            });
            context.login(user);
            return user;

        }
    },
    logout: {
        type: GraphQLBoolean,
        resolve: async (parent, args, context) => {
            context.logout();
            return true;
        }
    }
};

module.exports = UserMutations;