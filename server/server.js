const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('graphql-server-express');

const graphqlHTTP = require('express-graphql');

//Conect to mongoDB
mongoose.connect('mongodb://localhost/report', { useMongoClient: true, promiseLibrary: global.Promise });

//app server setup
var app = express();

//Schemas 

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

const reportSchema = require('./schemas/reportSchema');//report schema 
const userSchema = require('./schemas/userSchema');// user schemma

//User data conection 
app.use('/Api', bodyParser.json(), graphqlExpress({schema:userSchema}));
app.use('/ReportApi', bodyParser.json(), graphqlExpress({schema:reportSchema}));
app.use('/UserGraphiql', graphiqlExpress({endpointURL: '/Api'}));

app.listen(4000, () => console.log('Now browse to localhost:4000/graphiql'));