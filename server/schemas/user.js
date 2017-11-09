const mongoose = require('mongoose');
const ProjectSchema = require('./project');

const UserSchema = new mongoose.Schema({
	firstName: String,
	LastName: String,
	email: String,
	password: {
		type: String,
		require: true
	},
	role: {
        type: String,
        enum : ['ADMIN', 'REVIEW', 'DEVELOPER'],
        default: 'ADMIN'
    },
	projects:{
		type: [ProjectSchema],
		default: []
	}
});

module.exports = UserSchema