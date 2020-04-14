const CJSON = require('flatted');
const {
    GraphQLNonNull,
    GraphQLString
} = require("graphql");

const User = require('./../../models/user');

const {
    UserType
} = require('./../types');


const UserMutations = {
    createUser: {
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
    loginUser: {
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
                user,
                info
            } = await context.authenticate("graphql-local", {
                email,
                password
            });
            console.log(JSON.stringify(user[0]));
            return user[0];

        }
    }
};

module.exports = UserMutations;