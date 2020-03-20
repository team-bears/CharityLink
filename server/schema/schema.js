const Mutations = require('./mutations/mutations');
const RootQueries = require('./root_queries');

const {
    GraphQLSchema
} = require('graphql');

module.exports = new GraphQLSchema({
    query: RootQueries,
    mutation: Mutations
});