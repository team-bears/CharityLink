const {
    GraphQLNonNull,
    GraphQLID,
    GraphQLBoolean,
    GraphQLString
} = require("graphql");

const Charity = require('./../../models/charity');

const {
    CharityType
} = require('./../types');

const CharityMutations = {
    createCharity: {
        type: CharityType,
        args: {
            name: {
                type: new GraphQLNonNull(GraphQLString)
            },
            description: {
                type: new GraphQLNonNull(GraphQLString)
            },
            ownerId: {
                type: new GraphQLNonNull(GraphQLID)
            },
        },
        resolve: async (_source, args, context) => {
            let charity = new Charity({
                name: args.name,
                description: args.description,
                ownerId: args.ownerId
            });
            charity.save();
            return charity;
        }
    },
    deleteCharity: {
        type: GraphQLBoolean,
        args: {
            id: {
                type: new GraphQLNonNull(GraphQLID)
            }
        },
        resolve: (_source, args, context) => {
            let charity = Charity.findById(args.id);
            charity.remove();
        }
    }
};

module.exports = CharityMutations;