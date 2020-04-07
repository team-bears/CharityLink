const graphql = require('graphql');
const _ = require('lodash');

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

const users = [{
        id: 1,
        first_name: "Ravi",
        last_name: "Ghaghada",
        dob: "2000-01-28"
    },
    {
        id: 2,
        first_name: "Hogan",
        last_name: "Logan",
        dob: "2001-12-13"
    },
    {
        id: 3,
        first_name: "Charles",
        last_name: "Xavier",
        dob: "1992-03-31"
    }
]


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
            resolve(parent, args) {
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