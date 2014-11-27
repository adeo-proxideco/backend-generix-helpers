var assert = require("assert");
var should = require('should');
var blh=require('../index');

describe('exist', function(){
	describe("null", function(){
		describe('#notExist', function(){
			it('should return false for search '+JSON.stringify(null), function(){
		      	should(blh.exist(null, null)).not.be.ok;
		    })
			it('should return false for search '+JSON.stringify(['layout','vueUsers','anniversaire']), function(){
		      	should(blh.exist(null, ['layout','vueUsers','anniversaire'])).not.be.ok;
		    })
			it('should return false for search '+JSON.stringify(['layout',{0:'vueUsers',1:'toto'},'nom']), function(){
		      	should(blh.exist(null, ['layout',{0:'vueUsers',1:'toto'},'nom'])).not.be.ok;
		    })
		})
	})

	var jeux1={
		layout:{
			vueUsers:{
				'$':{
					name:'toto'
				},
				nom:'toto', 
				prenom:'titi',
				age: 21
			}
		}
	}
	describe("jeux1:"+JSON.stringify(jeux1), function(){
	    describe('#exist', function(){
			it('should return true for search '+JSON.stringify(['layout','vueUsers','nom']), function(){
		      	should(blh.exist(jeux1, ['layout','vueUsers','nom'])).be.ok;
		    })
			it('should return true for search '+JSON.stringify(['layout',{0:'vueUsers',1:'toto'},'nom']), function(){
		      	if(blh.exist(jeux1, ['layout',{0:'vueUsers',1:'toto'},'age'])!==true){
		      		throw (new Error ('result not egal to true'));
		      	}
		    })
	  	})
		describe('#notExist', function(){
			it('should return false for search '+JSON.stringify(['layout','vueUsers','anniversaire']), function(){
		      	should(blh.exist(jeux1, ['layout','vueUsers','anniversaire'])).not.be.ok;
		    })
			it('should return false for search '+JSON.stringify(['layout',{0:'vueUsers',1:'toto'},'nom']), function(){
		      	should(blh.exist(jeux1, ['layout',{0:'vueUsers',1:'toto'},'anniversaire'])).not.be.ok;
		    })
			it('should return false for search '+JSON.stringify(['layout',{0:'vueUsers',1:'toto'},'nom']), function(){
		      	should(blh.exist(jeux1, ['layout',{0:'vueUsers',1:'titi'},'anniversaire'])).not.be.ok;
		    })
		})
	})

	var jeux2={
		layout:{
			vueUsers:[
				{
					'$':{
						name:'toto'
					},
					nom:'toto', 
					prenom:'titi',
					age: 21
				},
				{
					'$':{
						name:'tutu'
					},
					nom:'tutu', 
					prenom:'tyty',
					age: 19
				}
			]
		}
	}
	describe("jeux2:"+JSON.stringify(jeux2), function(){
	    describe('#exist', function(){
			it('should return true for search '+JSON.stringify(['layout','vueUsers','nom']), function(){
		      	should(blh.exist(jeux2, ['layout',{0:'vueUsers',1:'toto'},'age'])).be.ok;
		    })
	  	})
		describe('#notExist', function(){
			it('should return false for search '+JSON.stringify(['layout','vueUsers','anniversaire']), function(){
		      	should(blh.exist(jeux2, ['layout','vueUsers','age'])).not.be.ok;
		    })
			it('should return false for search '+JSON.stringify(['layout',{0:'vueUsers',1:'toto'},'nom']), function(){
		      	should(blh.exist(jeux2, ['layout',{0:'vueUsers',1:'toto'},'anniversaire'])).not.be.ok;
		    })
			it('should return false for search '+JSON.stringify(['layout',{0:'vueUsers',1:'toto'},'nom']), function(){
		      	should(blh.exist(jeux2, ['layout',{0:'vueUsers',1:'titi'},'anniversaire'])).not.be.ok;
		    })
		})
	})
})