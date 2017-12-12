const mongoose = require('mongoose');
const ProjectSchema = require('./project');

const UserSchema = new mongoose.Schema({
	firstName: String,
	LastName: String,
	userName:String,
	email: String,
	password: {
		type: String,
		require: true
	},
	googleId:String,
	image:String,
	role: {
		type: String,
		default: 'DEVELOPER'
	},
	roleId:{
		type:Number,
		default:4
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