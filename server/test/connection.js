const mongoose = require('mongoose');

//Es6 Promises

mongoose.Promise = global.Promise;

//Conect to the date base befor the test
before(function(done){
	//conect to mongodb

	mongoose.connect('mongodb://localhost/testarro');

	mongoose.connection.once('open',function(){
		console.log('conection has been made');
		done();
	}).on('error',function(error){
		console.log('Connection error');
		console.log(error);
	});
	
});

//Drop the character collection before each tets
beforeEach(function(done){
	//Drop the collection
	mongoose.connection.collections.mariochars.drop(function(){
		done();
	});
});

