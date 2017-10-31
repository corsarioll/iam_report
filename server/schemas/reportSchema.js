const mongoose = require('mongoose');
const {composeWithMongoose} =  require('graphql-compose-mongoose');
const { GQC } = require('graphql-compose');

// STEP 1: DEFINE MONGOOSE SCHEMA AND MODEL
const itemSchema = new mongoose.Schema({
	reference:String,
	description: String,	
	status:String,
});
const taskSchema = new mongoose.Schema({
		completed:[itemSchema],
		progress:[itemSchema],
		planned:[itemSchema]
});

const reportSchema = new mongoose.Schema({
  name: String, // standard types
  tasks:taskSchema
});
const UserModel = mongoose.model('UserModel', reportSchema);

//CONVERT MONGOOSE MODEL TO GraphQL PIECES
const customizationOptions = {}; // left it empty for simplicity, described below
const ReportTC = composeWithMongoose(UserModel, customizationOptions);

// CREATE GraphQL SCHEMA WITH ALL CRUD USER OPERATIONS
GQC.rootQuery().addFields({
  reportById: ReportTC.getResolver('findById'),
  reportByIds: ReportTC.getResolver('findByIds'),
  reportOne: ReportTC.getResolver('findOne'),
  reportMany: ReportTC.getResolver('findMany'),
  reportCount: ReportTC.getResolver('count'),
  reportConnection: ReportTC.getResolver('connection'),
  reportPagination: ReportTC.getResolver('pagination'),
});

GQC.rootMutation().addFields({
  reportCreate: ReportTC.getResolver('createOne'),
  reportUpdateById: ReportTC.getResolver('updateById'),
  reportUpdateOne: ReportTC.getResolver('updateOne'),
  reportUpdateMany: ReportTC.getResolver('updateMany'),
  reportRemoveById: ReportTC.getResolver('removeById'),
  reportRemoveOne: ReportTC.getResolver('removeOne'),
  reportRemoveMany: ReportTC.getResolver('removeMany'),
});

const graphqlSchema = GQC.buildSchema();
module.exports = graphqlSchema;