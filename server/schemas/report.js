const mongoose = require('mongoose');
const ProjectSchema = require('./project');
const TaskSchema = require('./task');
const UserSchema = require('./user');

const ReportSchema = new mongoose.Schema({
  	tasks: [TaskSchema],
		reporterId:String,
		projectId:String,
		date: { 
			type: Date, 
			default: Date.now 
		},
		importantInfo: String
});

module.exports = ReportSchema