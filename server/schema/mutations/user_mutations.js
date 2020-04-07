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
            }
        },
        resolve: (parent, args) => {
            let user = new User({
                first_name: args.first_name,
                last_name: args.last_name,
                dob: args.dob,
                followsIds: []
            });
            user.save();
            return user;
        }
    },
};

module.exports = UserMutations;