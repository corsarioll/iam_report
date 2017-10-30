const { makeExecutableSchema, addMockFunctionsToSchema } = require('graphql-tools');
const axios = require('axios');
const mongoose =  require('mongoose');
const {composeWithMongoose} =  require('graphql-compose-mongoose');
const { GQC } =  require('graphql-compose');

const RoleSchema = new mongoose.Schema({
    name: String
});
const RoleModel = mongoose.model('role', RoleSchema);

//CONVERT MONGOOSE MODEL TO GraphQL PIECES
const customizationOptions = {}; // left it empty for simplicity, described below
const RoleTC = composeWithMongoose(RoleModel, customizationOptions);

// ALL CRUD USER OPERATIONS
//Querys
GQC.rootQuery().addFields({
  roleById: RoleTC.getResolver('findById'),
  roleByIds: RoleTC.getResolver('findByIds'),
  roleOne: RoleTC.getResolver('findOne'),
  roleMany: RoleTC.getResolver('findMany'),
  roleCount: RoleTC.getResolver('count'),
  roleConnection: RoleTC.getResolver('connection'),
  rolePagination: RoleTC.getResolver('pagination'),
});

//Mutations
GQC.rootMutation().addFields({
  roleCreate: RoleTC.getResolver('createOne'),
  roleUpdateById: RoleTC.getResolver('updateById'),
  roleUpdateOne: RoleTC.getResolver('updateOne'),
  roleUpdateMany: RoleTC.getResolver('updateMany'),
  roleRemoveById: RoleTC.getResolver('removeById'),
  roleRemoveOne: RoleTC.getResolver('removeOne'),
  roleRemoveMany: RoleTC.getResolver('removeMany'),
});

const graphqlSchema = GQC.buildSchema();
module.exports = graphqlSchema;