const express = require('express');
const gqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
require('dotenv').config();


const app = express();

//creating port
const port = process.env.PORT || 4000;

//Connect to mongoDb...
const dbURL= process.env.MONGO_CONNECT
mongoose.connect(dbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
  }).catch(error => {
    console.error('Error connecting to MongoDB:', error);
  });


app.use('/graphql', gqlHTTP.graphqlHTTP({
    schema: schema,
    graphiql: true
}));

//Listen to port
app.listen(port, () => {
    console.log(`now listening for request  on port ${port} `);
});