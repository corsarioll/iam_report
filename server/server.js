const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require ('apollo-server-express');
const graphqlHTTP = require('express-graphql');

//app server setup
var app = express();

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

const Chalk = require('chalk');
const cors = require('cors');

//app.use('/graphi',express.static(`${__dirname}/public`)); // we could have just used the `graphiql` option: https://github.com/graphql/express-graphql


const schemas = require('./schemas/index');

// Front end client
app.use('/graphql', cors(), graphqlHTTP(() => ({
  schema: schemas
})));

app.use('/Api', cors(), graphqlHTTP(() => ({
    schema: userSchema
})));

app.use('/ReportApi', cors(), graphqlHTTP(() => ({
    schema: reportSchema
})));

//User data conection 
app.use('/Api', bodyParser.json(), graphqlExpress({schema:schemas}));
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
