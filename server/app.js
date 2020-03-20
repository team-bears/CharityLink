require('dotenv').config();

const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const app = express();

app.use(express.static('public'));

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));