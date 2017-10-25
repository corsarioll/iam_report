const assert = require('assert');
const MarioChar = require('../model/mariocharts');

//Describe the test
describe('Finding recors',function(){
	
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
	it('Find a record to data base', function(done){
		
		MarioChar.findOne({name:'Mario'}).then(function(result){
			assert(result.name == 'Mario'); 
			done();
		});
		
	});
	
	//Find by ID test
	it('Finds a record by unique id', function(done){
    MarioChar.findOne({_id: char._id}).then(function(result){
      assert(result._id.toString() === char._id.toString());
      done();
    });
  });
	
});