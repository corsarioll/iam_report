const { makeExecutableSchema, addMockFunctionsToSchema } = require('graphql-tools');
const mongoose =  require('mongoose');
const { composeWithMongoose } =  require('graphql-compose-mongoose');
const { GQC } =  require('graphql-compose');

//DEFINE MONGOOSE SCHEMA AND MODEL
const ProjectSchema = new mongoose.Schema({
  name: String
});

const ProjectModel = mongoose.model('project', ProjectSchema);

//CONVERT MONGOOSE MODEL TO GraphQL PIECES
const customizationOptions = {}; // left it empty for simplicity, described below
const projectTC = composeWithMongoose(ProjectModel, customizationOptions);

// ALL CRUD PROYECT OPERATIONS
//Querys
GQC.rootQuery().addFields({
  projectById: projectTC.getResolver('findById'),
  projectByIds: projectTC.getResolver('findByIds'),
  projectOne: projectTC.getResolver('findOne'),
  projectMany: projectTC.getResolver('findMany'),
  projectCount: projectTC.getResolver('count'),
  projectConnection: projectTC.getResolver('connection'),
  projectPagination: projectTC.getResolver('pagination'),
});

//MUTATATIONS
GQC.rootMutation().addFields({
  projectCreate: projectTC.getResolver('createOne'),
  projectUpdateById: projectTC.getResolver('updateById'),
  projectUpdateOne: projectTC.getResolver('updateOne'),
  projectUpdateMany: projectTC.getResolver('updateMany'),
  projectRemoveById: projectTC.getResolver('removeById'),
  projectRemoveOne: projectTC.getResolver('removeOne'),
  projectRemoveMany: projectTC.getResolver('removeMany'),
});


//EXPORT SCHEMA
const graphqlSchema = GQC.buildSchema();
module.exports = {graphqlSchema :graphqlSchema, ProjectSchema:ProjectSchema};