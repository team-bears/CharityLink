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
    UserType
} = require('./types');

const Charity = require('../models/charity');
const User = require('../models/user');

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: {
                id: {
                    type: GraphQLID
                }
            },
            resolve(parent, args) {
                return User.findById(args.id);
            }
        },
        users: {
            type: new GraphQLList(UserType),
            async resolve(parent, args, context) {
                return User.find({});
            }
        },
        charity: {
            type: CharityType,
            args: {
                id: {
                    type: GraphQLID
                }
            },
            resolve(parent, args) {
                return Charity.findById(args.id);
            }
        },
        charities: {
            type: new GraphQLList(CharityType),
            resolve(parent, args) {
                return Charity.find({});
            }
        }
    }
});

module.exports = RootQuery;