const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull,
    GraphQLInterfaceType,
    GraphQLInputObjectType
} = require('graphql');

const User = require('./../models/user');

const AccountType = new GraphQLInterfaceType({
    name: 'Account',
    fields: () => ({
        _id: {
            type: GraphQLID
        },
        uid: {
            type: GraphQLString
        },
        profile_picture: {
            type: GraphQLString
        },
        name: {
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
    }),
    resolveType: (value) => {
        if (value.dob) {
            return UserType;
        } else {
            return CharityType;
        }
    }
});

const CharityType = new GraphQLObjectType({
    name: 'Charity',
    interfaces: [AccountType],
    fields: () => ({
        _id: {
            type: GraphQLID
        },
        uid: {
            type: GraphQLString
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
        phone: {
            type: GraphQLString
        },
        followers: {
            type: GraphQLList(AccountType)
        },
        follows: {
            type: GraphQLList(AccountType)
        },
    })
});

const UserType = new GraphQLObjectType({
    name: 'User',
    interfaces: [AccountType],
    fields: () => ({
        _id: {
            type: GraphQLID
        },
        first_name: {
            type: GraphQLString
        },
        last_name: {
            type: GraphQLString
        },
        uid: {
            type: GraphQLString
        },
        profile_picture: {
            type: GraphQLString
        },
        email: {
            type: GraphQLString
        },
        dob: {
            type: GraphQLString
        },
        gender: {
            type: GraphQLString
        },
        followers: {
            type: GraphQLList(AccountType)
        },
        follows: {
            type: GraphQLList(AccountType)
        },
        name: {
            type: GraphQLString,
            resolve: (parent) => {
                return parent.first_name + " " + parent.last_name;
            }
        },

    })
});

module.exports = {
    AccountType,
    CharityType,
    UserType
}