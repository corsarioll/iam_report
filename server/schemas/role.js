const mongoose = require('mongoose');
const ProjectSchema = require('./project');

const RoleSchema = new mongoose.Schema({
    roleName: String,
		roleId:Number
});

module.exports = RoleSchema