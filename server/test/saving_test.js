const assert = require('assert');
const MarioChar = require('../model/mariocharts');

//Describe the test
describe('Saving recors',function(){
	
	//Create tests
	it('Add record to data base', function(done){
		
		var chart = new MarioChar({
			name:'Mario',
			weight:40
		});	
		
		chart.save().then(function(){
			assert(chart.isNew === false);
			done();
		});
		
	});
	
});