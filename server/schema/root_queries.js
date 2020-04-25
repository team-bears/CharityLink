const graphql = require('graphql');
const _ = require('lodash');
const CJSON = require('flatted');

const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLList
} = graphql;

const {
    CharityType,
    AccountType,
    UserType
} = require('./types');

const Charity = require('../models/charity');
const User = require('../models/user');

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        me: {
            type: AccountType,
            resolve(parent, args, context) {
                const account = context.getUser();
                return account;
            }
        }
    }
});

module.exports = RootQuery;