const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create geolocation schema

const GeoSchema = new Schema({
	type:{
		default:"Point",
		type:String
	},
	coordinates:{
		type:[Number],
		index:"2dsphere"
	}
})

//create ninja Schema & model

const NinjaSchema = new Schema({
	name:{
		type:String,
		required: [true,'Name field is required']
	},
	rank:{
		type:String,
	},
	available:{
		type:Boolean,
		default:false
	},
	//Add in geo location 
});

const Ninja = mongoose.model('ninja',NinjaSchema);

module.exports = Ninja;