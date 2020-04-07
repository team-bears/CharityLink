require('dotenv').config();

const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const app = express();
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://charitylink:CharityLink123@charitylink-bibqn.mongodb.net/test?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.once('open', () => {
    console.log('Connected to the database');
});

const _ = require('lodash');

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

app.use(express.static('public'));

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}));

module.exports = app;