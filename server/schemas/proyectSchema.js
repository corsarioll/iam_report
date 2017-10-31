const { makeExecutableSchema, addMockFunctionsToSchema } = require('graphql-tools');
const mongoose =  require('mongoose');
const {composeWithMongoose} =  require('graphql-compose-mongoose');
const { GQC } =  require('graphql-compose');

//DEFINE MONGOOSE SCHEMA AND MODEL
const proyectSchema = new mongoose.Schema({
  proyectName: String,
});

const proyectModel = mongoose.model('proyect', proyectSchema);

//CONVERT MONGOOSE MODEL TO GraphQL PIECES
const customizationOptions = {}; // left it empty for simplicity, described below
const proyectTC = composeWithMongoose(proyectModel, customizationOptions);

// ALL CRUD PROYECT OPERATIONS
//Querys
GQC.rootQuery().addFields({
  proyectById: proyectTC.getResolver('findById'),
  proyectByIds: proyectTC.getResolver('findByIds'),
  proyectOne: proyectTC.getResolver('findOne'),
  proyectMany: proyectTC.getResolver('findMany'),
  proyectCount: proyectTC.getResolver('count'),
  proyectConnection: proyectTC.getResolver('connection'),
  proyectPagination: proyectTC.getResolver('pagination'),
});

//MUTATATIONS
GQC.rootMutation().addFields({
  proyectCreate: proyectTC.getResolver('createOne'),
  proyectUpdateById: proyectTC.getResolver('updateById'),
  proyectUpdateOne: proyectTC.getResolver('updateOne'),
  proyectUpdateMany: proyectTC.getResolver('updateMany'),
  proyectRemoveById: proyectTC.getResolver('removeById'),
  proyectRemoveOne: proyectTC.getResolver('removeOne'),
  proyectRemoveMany: proyectTC.getResolver('removeMany'),
});


//EXPORT SCHEMA
const graphqlSchema = GQC.buildSchema();
module.exports = {graphqlSchema :graphqlSchema, proyectSchema:proyectSchema};