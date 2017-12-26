const { makeExecutableSchema, addMockFunctionsToSchema } = require('graphql-tools');
const mongoose =  require('mongoose');
const { composeWithMongoose } =  require('graphql-compose-mongoose');
const { GQC } =  require('graphql-compose');

const ProjectSchema = require('./project');
const ReportSchema   = require('./report');
const TaskSchema    = require('./task');
const UserSchema    = require('./user');
const RoleSchema    = require('./role');

//create models
const ProjectModel  = mongoose.model('Project', ProjectSchema);
const ReportModel   = mongoose.model('Report', ReportSchema);
const TaskModel     = mongoose.model('Task', TaskSchema);
const UserModel     = mongoose.model('User', UserSchema);
const RoleModel     = mongoose.model('Role', RoleSchema);

//CONVERT MONGOOSE MODEL TO GraphQL PIECES
const customizationOptions = {}; // left it empty for simplicity, described below

const ProjectTC = composeWithMongoose(ProjectModel, customizationOptions);
const ReportTC  = composeWithMongoose(ReportModel, customizationOptions);
const TaskTC    = composeWithMongoose(TaskModel, customizationOptions);
const UserTC    = composeWithMongoose(UserModel, customizationOptions);
const RoleTC    = composeWithMongoose(RoleModel, customizationOptions);

////////////////////////////////////
/// Project 
////////////////////////////////////
//Querys
GQC.rootQuery().addFields({
  projectById: ProjectTC.getResolver('findById'),
  projectByIds: ProjectTC.getResolver('findByIds'),
  projectOne: ProjectTC.getResolver('findOne'),
  projectMany: ProjectTC.getResolver('findMany'),
  projectCount: ProjectTC.getResolver('count'),
  projectConnection: ProjectTC.getResolver('connection'),
  projectPagination: ProjectTC.getResolver('pagination')
});

//MUTATATIONS
GQC.rootMutation().addFields({
projectCreate: ProjectTC.getResolver('createOne'),
projectUpdateById: ProjectTC.getResolver('updateById'),
projectUpdateOne: ProjectTC.getResolver('updateOne'),
projectUpdateMany: ProjectTC.getResolver('updateMany'),
projectRemoveById: ProjectTC.getResolver('removeById'),
projectRemoveOne: ProjectTC.getResolver('removeOne'),
projectRemoveMany: ProjectTC.getResolver('removeMany')
});

//////////////////////////////////////
/// Report
//////////////////////////////////////
//Querys
GQC.rootQuery().addFields({
  ReportById: ReportTC.getResolver('findById'),
  ReportByIds: ReportTC.getResolver('findByIds'),
  ReportOne: ReportTC.getResolver('findOne'),
  ReportMany: ReportTC.getResolver('findMany'),
  ReportCount: ReportTC.getResolver('count'),
  ReportConnection: ReportTC.getResolver('connection'),
  ReportPagination: ReportTC.getResolver('pagination')
});
  
//Mutations
GQC.rootMutation().addFields({
  ReportCreate: ReportTC.getResolver('createOne'),
  ReportUpdateById: ReportTC.getResolver('updateById'),
  ReportUpdateOne: ReportTC.getResolver('updateOne'),
  ReportUpdateMany: ReportTC.getResolver('updateMany'),
  ReportRemoveById: ReportTC.getResolver('removeById'),
  ReportRemoveOne: ReportTC.getResolver('removeOne'),
  ReportRemoveMany: ReportTC.getResolver('removeMany')
});

//////////////////////////////////////
/// Task
//////////////////////////////////////
//Querys
GQC.rootQuery().addFields({
  TaskById: TaskTC.getResolver('findById'),
  TaskByIds: TaskTC.getResolver('findByIds'),
  TaskOne: TaskTC.getResolver('findOne'),
  TaskMany: TaskTC.getResolver('findMany'),
  TaskCount: TaskTC.getResolver('count'),
  TaskConnection: TaskTC.getResolver('connection'),
  TaskPagination: TaskTC.getResolver('pagination')
});
  
//Mutations
GQC.rootMutation().addFields({
  TaskCreate: TaskTC.getResolver('createOne'),
  TaskUpdateById: TaskTC.getResolver('updateById'),
  TaskUpdateOne: TaskTC.getResolver('updateOne'),
  TaskUpdateMany: TaskTC.getResolver('updateMany'),
  TaskRemoveById: TaskTC.getResolver('removeById'),
  TaskRemoveOne: TaskTC.getResolver('removeOne'),
  TaskRemoveMany: TaskTC.getResolver('removeMany')
});

//////////////////////////////////////////////////
// User
//////////////////////////////////////////////////
//Querys
GQC.rootQuery().addFields({
  userById: UserTC.getResolver('findById'),
  userByIds: UserTC.getResolver('findByIds'),
  userOne: UserTC.getResolver('findOne'),
  userMany: UserTC.getResolver('findMany'),
  userCount: UserTC.getResolver('count'),
  userConnection: UserTC.getResolver('connection'),
  userPagination: UserTC.getResolver('pagination')
});

//Mutations
GQC.rootMutation().addFields({
  userCreate: UserTC.getResolver('createOne'),
  userUpdateById: UserTC.getResolver('updateById'),
  userUpdateOne: UserTC.getResolver('updateOne'),
  userUpdateMany: UserTC.getResolver('updateMany'),
  userRemoveById: UserTC.getResolver('removeById'),
  userRemoveOne: UserTC.getResolver('removeOne'),
  userRemoveMany: UserTC.getResolver('removeMany')
});
//////////////////////////////////////////////////
// Role
//////////////////////////////////////////////////
//Querys
GQC.rootQuery().addFields({
  roleById: RoleTC.getResolver('findById'),
  roleByIds: RoleTC.getResolver('findByIds'),
  roleOne: RoleTC.getResolver('findOne'),
  roleMany: RoleTC.getResolver('findMany'),
  roleCount: RoleTC.getResolver('count'),
  roleConnection: RoleTC.getResolver('connection'),
  rolePagination: RoleTC.getResolver('pagination')
});

//Mutations
GQC.rootMutation().addFields({
  roleCreate: RoleTC.getResolver('createOne'),
  roleUpdateById: RoleTC.getResolver('updateById'),
  roleUpdateOne: RoleTC.getResolver('updateOne'),
  roleUpdateMany: RoleTC.getResolver('updateMany'),
  roleRemoveById: RoleTC.getResolver('removeById'),
  roleRemoveOne: RoleTC.getResolver('removeOne'),
  roleRemoveMany: RoleTC.getResolver('removeMany')
});

const graphqlSchema = GQC.buildSchema();
module.exports = graphqlSchema;