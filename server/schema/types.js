const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull
} = require('graphql');

const User = require('./../models/user');

const CharityType = new GraphQLObjectType({
    name: 'Charity',
    fields: () => ({
        id: {
            type: GraphQLID
        },
        name: {
            type: GraphQLString
        },
        description: {
            type: GraphQLString
        },
        owner: {
            type: UserType,
            resolve(parent, args) {
                return User.findById(parent.ownerId);
            }
        },
        followers: {
            type: new GraphQLList(UserType),
            resolve(parent, args) {
                // TODO: resolve it
            }
        }
    })
});

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: {
            type: GraphQLID
        },
        first_name: {
            type: GraphQLString
        },
        last_name: {
            type: GraphQLString
        },
        dob: {
            type: GraphQLInt
        },
        email: {
            type: GraphQLString
        },
        password: {
            type: GraphQLString
        },
        owns: {
            type: new GraphQLList(CharityType),
            resolve(parent, args) {
                // TODO: resolve it
            }
        },
        follows: {
            type: new GraphQLList(CharityType),
            resolve(parent, args) {
                // TODO: resolve it
            }
        }
    })
});

module.exports = {
    CharityType,
    UserType
}