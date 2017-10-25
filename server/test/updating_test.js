const assert = require('assert');
const MarioChar = require('../model/mariocharts');

//Describe the test
describe('Updating recors',function(){
	
	var char;
	beforeEach(function(done){
				
		char = new MarioChar({
			name:'Mario',
			weight:50
		});	
		
		char.save().then(function(){
			assert(char.isNew === false);
			done();
		});
	});
	
	//Find tests
	it('Updating one record to data base', function(done){
		
		MarioChar.findOneAndUpdate({name:'Mario'},{name:'Luigi'}).then(function(){
			MarioChar.findOne({_id:char._id}).then(function(result){
				assert(result.name === 'Luigi');
				done();
			});
		});
		
	});
	
	//Find tests
	it('increments the weight by 1', function(done){
		
		MarioChar.update({},{$inc:{weight:1}}).then(function(){
			MarioChar.findOne({name:'Mario'}).then(function(record){
				assert(record.weight === 51);
				done();
			});
		});
		
	});
	
});