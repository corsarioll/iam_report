const { makeExecutableSchema, addMockFunctionsToSchema } = require('graphql-tools');
const axios = require('axios');
const mongoose =  require('mongoose');
const {composeWithMongoose} =  require('graphql-compose-mongoose');
const { GQC } =  require('graphql-compose');
//IMPORT USED SCHEMAS
const {proyectSchema} = require('./proyectSchema');

// STEP 1: DEFINE MONGOOSE SCHEMA AND MODEL
const personalDataSchema = new mongoose.Schema({
  age: String,
	name: String,
	secondName:String
});
const ReportSchema = new mongoose.Schema({
	emai: String,
	password: {
		type: String,
    require: true,
	},
	personalData:personalDataSchema,
	role: String,
	roleID: Number,
	proyects:{
		type:[proyectSchema],
		default:[]
	}
});

const reportModel = mongoose.model('reportModel', ReportSchema);

//CONVERT MONGOOSE MODEL TO GraphQL PIECES
const customizationOptions = {}; // left it empty for simplicity, described below
const ReportTc = composeWithMongoose(reportModel, customizationOptions);

// ALL CRUD USER OPERATIONS
//Querys
GQC.rootQuery().addFields({
  userById: ReportTc.getResolver('findById'),
  userByIds: ReportTc.getResolver('findByIds'),
  userOne: ReportTc.getResolver('findOne'),
  userMany: ReportTc.getResolver('findMany'),
  userCount: ReportTc.getResolver('count'),
  userConnection: ReportTc.getResolver('connection'),
  userPagination: ReportTc.getResolver('pagination'),
});

//Mutations
GQC.rootMutation().addFields({
  userCreate: ReportTc.getResolver('createOne'),
  userUpdateById: ReportTc.getResolver('updateById'),
  userUpdateOne: ReportTc.getResolver('updateOne'),
  userUpdateMany: ReportTc.getResolver('updateMany'),
  userRemoveById: ReportTc.getResolver('removeById'),
  userRemoveOne: ReportTc.getResolver('removeOne'),
  userRemoveMany: ReportTc.getResolver('removeMany'),
});

const graphqlSchema = GQC.buildSchema();
module.exports = graphqlSchema;