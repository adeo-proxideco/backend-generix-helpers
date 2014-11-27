var assert = require("assert");
var blh=require('../index');

describe('valueof', function(){
	describe("null", function(){
			it('should return null for search '+JSON.stringify(null), function(){
		      	if(blh.valueof(null, null)!==null){
		      		throw (new Error ('result not null'));
		      	}
		    })
			it('should return null for search '+JSON.stringify(['layout','vueUsers','anniversaire']), function(){
		      	if(blh.valueof(null, ['layout','vueUsers','anniversaire'])!==null){
		      		throw (new Error ('result not null'));
		      	}
		    })
			it('should return null for search '+JSON.stringify(['layout',{0:'vueUsers',1:'toto'},'nom']), function(){
		      	if(blh.valueof(null, ['layout',{0:'vueUsers',1:'toto'},'nom'])!==null){
		      		throw (new Error ('result not null'));
		      	}
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
			it('should return a value for search '+JSON.stringify(['layout','vueUsers','nom']), function(){
		      	if(blh.valueof(jeux1, ['layout','vueUsers','nom'])!=='toto'){
		      		throw (new Error ('result not egal to toto'));
		      	}
		    })
			it('should return null for search '+JSON.stringify(['layout',{0:'vueUsers',1:'toto'},'nom']), function(){
		      	if(blh.valueof(jeux1, ['layout',{0:'vueUsers',1:'toto'},'age'])!==21){
		      		throw (new Error ('result not egal to toto'));
		      	}
		    })
	  	})
		describe('#notExist', function(){
			it('should return null for search '+JSON.stringify(['layout','vueUsers','anniversaire']), function(){
		      	if(blh.valueof(jeux1, ['layout','vueUsers','anniversaire'])!==null){
		      		throw (new Error ('result not egal to toto'));
		      	}
		    })
			it('should return null for search '+JSON.stringify(['layout',{0:'vueUsers',1:'toto'},'nom']), function(){
		      	if(blh.valueof(jeux1, ['layout',{0:'vueUsers',1:'toto'},'anniversaire'])!==null){
		      		throw (new Error ('result not egal to toto'));
		      	}
		    })
			it('should return null for search '+JSON.stringify(['layout',{0:'vueUsers',1:'toto'},'nom']), function(){
		      	if(blh.valueof(jeux1, ['layout',{0:'vueUsers',1:'titi'},'age'])!==null){
		      		throw (new Error ('result not egal to toto'));
		      	}
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
			it('should return a value for search '+JSON.stringify(['layout','vueUsers','nom']), function(){
		      	if(blh.valueof(jeux2, ['layout',{0:'vueUsers',1:'toto'},'age'])!==21){
		      		throw (new Error ('result not egal to toto'));
		      	}
		    })
	  	})
		describe('#notExist', function(){
			it('should return null for search '+JSON.stringify(['layout','vueUsers','anniversaire']), function(){
		      	if(blh.valueof(jeux2, ['layout','vueUsers','age'])!==null){
		      		throw (new Error ('result not egal to toto'));
		      	}
		    })
			it('should return null for search '+JSON.stringify(['layout',{0:'vueUsers',1:'toto'},'nom']), function(){
		      	if(blh.valueof(jeux2, ['layout',{0:'vueUsers',1:'toto'},'anniversaire'])!==null){
		      		throw (new Error ('result not egal to toto'));
		      	}
		    })
			it('should return null for search '+JSON.stringify(['layout',{0:'vueUsers',1:'toto'},'nom']), function(){
		      	if(blh.valueof(jeux2, ['layout',{0:'vueUsers',1:'titi'},'age'])!==null){
		      		throw (new Error ('result not egal to toto'));
		      	}
		    })
		})
	})
})