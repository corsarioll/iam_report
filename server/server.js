import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import mongoose from 'mongoose';
const graphqlHTTP = require('express-graphql');
mongoose.Promise = global.Promise;


import models from './models'

//mezclar todos los archivos de carpetas de types y resolvers
import path from 'path';
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas';
const typeDefs = mergeTypes(fileLoader(path.join(__dirname, './types')));
const resolvers = mergeResolvers(fileLoader(path.join(__dirname, './resolvers')));

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});
const PORT = 5000;

const app = express();

// bodyParser is needed just for POST.
const cors = require('cors');

app.use('/graphql', cors(), graphqlHTTP({
  schema,
  context: {
    models,
    user: {
      _id: 1, username: 'bob'
    }
  }
}));
app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' })); // if you want GraphiQL enabled


mongoose.connect('mongodb://localhost/report', {useMongoClient: true}).then(
  () => {
    console.log('Connected to Mongo!!!!')
    app.listen(PORT, ()=>{
      console.log('Running GRAPHQL server on port '+ PORT);
    });
  }
)

/*

const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require ('apollo-server-express');

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

const tasksSchema = require('./schemas/tasksSchema');//report schema 
const reportSchema = require('./schemas/reportSchema');//report schema 
const userSchema = require('./schemas/userSchema');// user schemma

const Chalk = require('chalk');
const cors = require('cors');

//app.use('/graphi',express.static(`${__dirname}/public`)); // we could have just used the `graphiql` option: https://github.com/graphql/express-graphql

app.use('/graphql', cors(), graphqlHTTP(() => ({
    schema: tasksSchema
})));

app.use('/Api', cors(), graphqlHTTP(() => ({
    schema: userSchema
})));

app.use('/ReportApi', cors(), graphqlHTTP(() => ({
    schema: reportSchema
})));

//User data conection 
/*app.use('/Api', cors(), graphqlHTTP({schema:userSchema}));
app.use('/ReportApi', cors(), graphqlHTTP({schema:reportSchema}));
app.use('/TaskstApi', cors(), graphqlHTTP({schema:tasksSchema}));
app.use('/UserGraphiql', graphiqlExpress({endpointURL: '/Api'}));

app.listen(4000, () => console.log('Now browse to localhost:4000/graphiql'));
*/