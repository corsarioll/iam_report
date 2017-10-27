const mongoose = require('mongoose');
const {composeWithMongoose} =  require('graphql-compose-mongoose');
const { GQC } = require('graphql-compose');

// STEP 1: DEFINE MONGOOSE SCHEMA AND MODEL

const taskSchema = new mongoose.Schema({
  done: Boolean, // standard types
  label:String,
	id:String
});
const taskModel = mongoose.model('taskModel', taskSchema);

//CONVERT MONGOOSE MODEL TO GraphQL PIECES
const customizationOptions = {}; // left it empty for simplicity, described below
const TaskTC = composeWithMongoose(taskModel, customizationOptions);

// CREATE GraphQL SCHEMA WITH ALL CRUD USER OPERATIONS
GQC.rootQuery().addFields({
  taskById: TaskTC.getResolver('findById'),
  taskByIds: TaskTC.getResolver('findByIds'),
  taskOne: TaskTC.getResolver('findOne'),
  taskMany: TaskTC.getResolver('findMany'),
  taskCount: TaskTC.getResolver('count'),
  taskConnection: TaskTC.getResolver('connection'),
  taskPagination: TaskTC.getResolver('pagination'),
});

GQC.rootMutation().addFields({
  taskCreate: TaskTC.getResolver('createOne'),
  taskUpdateById: TaskTC.getResolver('updateById'),
  taskUpdateOne: TaskTC.getResolver('updateOne'),
  taskUpdateMany: TaskTC.getResolver('updateMany'),
  taskRemoveById: TaskTC.getResolver('removeById'),
  taskRemoveOne: TaskTC.getResolver('removeOne'),
  taskRemoveMany: TaskTC.getResolver('removeMany'),
});

const graphqlSchema = GQC.buildSchema();
module.exports = graphqlSchema;