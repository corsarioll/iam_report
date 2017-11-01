const mongoose = require('mongoose');
const ProjectSchema = require('./project');
const TaskSchema = require('./task');
const UserSchema = require('./user');

const ReportSchema = new mongoose.Schema({
  	name: String,
 	project: ProjectSchema,
  	tasks: [TaskSchema],
  	reporter: UserSchema,
	date: { 
		type: Date, 
		default: Date.now 
	}
});

module.exports = ReportSchema