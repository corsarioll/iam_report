const mongoose =  require('mongoose');
const UserSchema = require('./user');
const TaskSchema = require('./task');
const ReportSchema = require('./report');

//DEFINE MONGOOSE SCHEMA AND MODEL
const ProjectSchema = new mongoose.Schema({
  name: String,
  users: [UserSchema],
  tasks: [TaskSchema],
  reports: [ReportSchema]
});

module.exports = ProjectSchema