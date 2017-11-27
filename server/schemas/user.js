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
        default: 'ADMIN'
    },
	projects:{
		type: [String],
		default: []
	},
	active:{
		type:Boolean,
		default:false
	}
});

module.exports = UserSchema