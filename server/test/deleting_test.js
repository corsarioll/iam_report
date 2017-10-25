const assert = require('assert');
const MarioChar = require('../model/mariocharts');

//Describe the test
describe('Deleting recors',function(){
	
	var char;
	beforeEach(function(done){
				
		char = new MarioChar({
			name:'Mario',
			weight:40
		});	
		
		char.save().then(function(){
			assert(char.isNew === false);
			done();
		});
	});
	
	//Find tests
	it('Delete one record to data base', function(done){
		
		MarioChar.findOneAndRemove({name:'Mario'}).then(function(){
			MarioChar.findOne({name:'mario'}).then(function(result){
				assert(result === null);
				done();
			});
		});
		
	});
	
});