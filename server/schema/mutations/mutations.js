const UserMutations = require('./user_mutations');
const CharityMutations = require('./charity_mutations');

const {
    GraphQLObjectType
} = require('graphql');

module.exports = new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
        ...UserMutations,
        ...CharityMutations
    })
});