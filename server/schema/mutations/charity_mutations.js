const {
    GraphQLNonNull,
    GraphQLID,
    GraphQLBoolean
} = require("graphql");

const CharityMutations = {
    mutateCharity: {
        type: GraphQLBoolean,
        args: {
            id: {
                type: new GraphQLNonNull(GraphQLID)
            }
        },
        resolve: async (_source, args, context) => {}
    },
};

module.exports = CharityMutations;