const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')
const { graphqlExpress, graphiqlExpress } = require ('apollo-server-express')
const graphqlHTTP = require('express-graphql')
const authRoutes = require('./routes/auth-routes')
const passportSetup = require('./config/passport-setup')
const cors = require('cors')
const keys = require('./config/keys')
const proxy = require('http-proxy-middleware')
const cookieSession = require('cookie-session')
const passport = require('passport')
//app server setup
var app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const schemas = require('./schemas/index')
//cookie session
/*app.use(cookieSession({
	maxAge:24*60*60*1000,
	keys:[keys.session.cookieKey]
}))*/

//initialized passport
app.use(passport.initialize())
app.use(passport.session())

//cros
app.use(cors())
//set up login routes 
app.use('/auth',authRoutes)

// Front end client
app.use('/graphql', cors(), graphqlHTTP({schema: schemas}))

// Graphql front end terminal 
app.use('/Api',  bodyParser.json(), graphqlHTTP({schema:schemas}))
app.use('/graphiql', graphiqlExpress({endpointURL: '/Api'}))

const PORT = 4000;

mongoose.connect('mongodb://localhost/report', {useMongoClient: true, promiseLibrary: global.Promise}).then(
  () => {
    console.log('Connected to Mongo!!!!')
    app.listen(PORT, ()=>{
      console.log('Running GRAPHQL server on port '+ PORT);
    });
  }
)
