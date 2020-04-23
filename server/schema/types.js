const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull,
    GraphQLInterfaceType
} = require('graphql');

const User = require('./../models/user');

const AccountType = new GraphQLInterfaceType({
    name: 'Account',
    fields: () => ({
        id: {
            type: GraphQLID
        },
        name: {
            type: GraphQLString
        },
        profile_picture: {
            type: GraphQLString
        },
        email: {
            type: GraphQLString
        },
        followers: {
            type: GraphQLList(AccountType)
        },
        follows: {
            type: GraphQLList(AccountType)
        }
    })
});

const CharityType = new GraphQLObjectType({
    name: 'Charity',
    interfaces: [AccountType],
    fields: () => ({
        id: {
            type: GraphQLID
        },
        name: {
            type: GraphQLString
        },
        profile_picture: {
            type: GraphQLString
        },
        email: {
            type: GraphQLString
        },
        followers: {
            type: GraphQLList(AccountType)
        },
        follows: {
            type: GraphQLList(AccountType)
        },
        phone: {
            type: GraphQLString
        }
    })
});

const UserType = new GraphQLObjectType({
    name: 'User',
    interfaces: [AccountType],
    fields: () => ({
        id: {
            type: GraphQLID
        },
        name: {
            type: GraphQLString
        },
        profile_picture: {
            type: GraphQLString
        },
        email: {
            type: GraphQLString
        },
        followers: {
            type: GraphQLList(AccountType)
        },
        follows: {
            type: GraphQLList(AccountType)
        },
        dob: {
            type: GraphQLString
        },
        gender: {
            type: GraphQLString
        }
    })
});

module.exports = {
    AccountType,
    CharityType,
    UserType
}