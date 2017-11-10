const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require ('apollo-server-express');
const graphqlHTTP = require('express-graphql');

//app server setup
var app = express();

const Chalk = require('chalk');
const cors = require('cors');

const schemas = require('./schemas/index');

// Front end client
app.use('/graphql', cors(), graphqlHTTP({schema: schemas}));

// Graphql front end terminal 
app.use('/Api',  bodyParser.json(), graphqlHTTP({schema:schemas}));
app.use('/graphiql', graphiqlExpress({endpointURL: '/Api'}));


const PORT = 4000;

mongoose.connect('mongodb://localhost/report', {useMongoClient: true, promiseLibrary: global.Promise}).then(
  () => {
    console.log('Connected to Mongo!!!!')
    app.listen(PORT, ()=>{
      console.log('Running GRAPHQL server on port '+ PORT);
    });
  }
)
