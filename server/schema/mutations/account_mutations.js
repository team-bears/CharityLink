const {
    GraphQLNonNull,
    GraphQLString,
    GraphQLBoolean
} = require("graphql");

const User = require('./../../models/user');
const Charity = require('./../../models/charity');

const Errortype = require('./../../errors/errors').Errortype;

const {
    AccountType,
    CharityType,
    UserType
} = require('./../types');


const AccountMutations = {
    login: {
        type: AccountType,
        args: {
            identifier: {
                type: new GraphQLNonNull(GraphQLString)
            },
            password: {
                type: new GraphQLNonNull(GraphQLString)
            }
        },
        resolve: async (parent, {
            identifier,
            password
        }, context) => {

            // Due to the implementation of graphql-passport,
            // the identifier must be stored in an object called email
            const email = identifier;

            const {
                user
            } = await context.authenticate("graphql-local", {
                email, // = identifier
                password
            });
            context.login(user);
            return user;
        }
    },
    logout: {
        type: GraphQLBoolean,
        resolve: async (parent, args, context) => {
            context.logout();
            return true;
        }
    },
    deleteMe: {
        type: GraphQLBoolean,
        resolve: async (parent, args, context) => {

            if (context.isUnauthenticated()) {
                throw new Error(Errortype.AUTHORIZATION_DELETE_ACCOUNT);
            }

            const account = context.getUser();
            context.logout();

            if (account.__typename == "Charity") {
                const res = await Charity.findByIdAndDelete(account._id);
                return true;
            }

            if (account.__typename == "User") {
                const res = await User.findByIdAndDelete(account._id);
                return true;
            }
        }
    }
};

module.exports = AccountMutations;