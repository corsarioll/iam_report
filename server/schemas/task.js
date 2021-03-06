const mongoose = require('mongoose');
const ProjectSchema = require('./project');
const UserSchema = require('./user');

const TaskSchema = new mongoose.Schema({
    reference: String,
    description: String,
    project: ProjectSchema,
    assignedTo: UserSchema,
		status: {
        type: String,
        default: 'COMPLETED'
    }
});

module.exports = TaskSchema