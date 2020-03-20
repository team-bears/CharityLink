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
                // TODO
            }
        },
        users: {
            type: new GraphQLList(UserType),
            resolve(parent, args) {
                // TODO
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
                // TODO
            }
        },
        charities: {
            type: new GraphQLList(CharityType),
            resolve(parent, args) {
                // TODO
            }
        }
    }
});

module.exports = RootQuery;