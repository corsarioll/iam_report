const assert = require('assert');
const mongoose = require('mongoose');
const Author = require('../model/author');

//Describe Blog
describe('Nesting records', function(){
	
	beforeEach(function(done){
		mongoose.connection.collections.authors.drop(function(){
			done();
		});
	});
	
	//Creates test
	it('Create author with sub-documents', function(done){
		var pat = new Author({
			name:'patrick Roufous',
			books: [{title:'perro boock',pages:300}]
		});
		
		pat.save().then(function(){
			Author.findOne({name:'patrick Roufous'}).then(function(record){
				assert(record.books.length === 1);
				done();
			});	
		});
		
	});
	
	//Add book to author
	it('Add boocks to autor', function(done){
		
		var pat = new Author({
			name:'patrick Roufous',
			books: [{title:'perro boock',pages:300}]
		});
		
		pat.save().then(function(){
			Author.findOne({name:'patrick Roufous'}).then(function(record){
				//Add a book to the  book array
				record.books.push({title:'man fear', pages:130});
				record.save().then(function(){
					Author.findOne({name:'patrick Roufous'}).then(function(result){
						assert(result.books.length ===2);
						done();
					});
				});
			});	
		});
		
		
	});
	
});