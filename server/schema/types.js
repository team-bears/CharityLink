const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLInt,
    GraphQLList
} = require('graphql');

const CharityType = new GraphQLObjectType({
    name: 'Charity',
    fields: () => ({
        id: {
            type: GraphQLID
        },
        name: {
            type: GraphQLString
        },
        owner: {
            type: UserType,
            resolve(parent, args) {
                // TODO : resolve it 
            }
        }
    })
});

const UserType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: {
            type: GraphQLID
        },
        name: {
            type: GraphQLString
        },
        dob: {
            type: GraphQLInt
        },
        owns: {
            type: new GraphQLList(CharityType),
            resolve(parent, args) {
                // TODO : resolve it
            }
        }
    })
});

module.exports = {
    CharityType,
    UserType
}