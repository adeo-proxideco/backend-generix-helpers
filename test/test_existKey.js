var assert = require("assert");
var blh=require('../index');


describe('existKey', function(){
	var a={
		ResponseStatus: "1",
		numOrder: "1234567",
		message: "tout est OK",
		layout:{
			user:{
				nom:'toto', 
				prenom:'titi',
				age: " 21   ",
				marrie: "OUI",
				celibataire: "no",
			}
		}
	}
	var b=[
		{ResponseStatus: "1"},
		{numOrder: "1234567"},
		{message: "tout est OK"},
		{layout:{
			user:{
				nom:'toto', 
				prenom:'titi',
				age: " 21   ",
				marrie: "OUI",
				celibataire: "no",
			}
		}}
	]
	describe('null', function(){
		it('1.1 - null', function(){
	      	var tmp=blh.existKey(null, null);
	      	if(tmp != false){
	      		throw (new Error('Error existKey'));
	      	}
		})
		it('1.2 - null', function(){
	      	var tmp=blh.existKey(null, null);
	      	if(tmp != false){
	      		throw (new Error('Error existKey'));
	      	}
		})
	})
	describe('azerty', function(){
		it('2.2 - null', function(){
	      	var tmp=blh.existKey('azerty', null);
	      	if(tmp != false){
	      		throw (new Error('Error existKey'));
	      	}
		})
		it('2.3 - ResponseStatus', function(){
	      	var tmp=blh.existKey('azerty', 'ResponseStatus');
	      	if(tmp != false){
	      		throw (new Error('Error existKey'));
	      	}
		})
		it('2.5 - prenom', function(){
	      	var tmp=blh.existKey('azerty', 'prenom');
	      	if(tmp != false){
	      		throw (new Error('Error existKey'));
	      	}
		})
		it('2.6 - anniversaire', function(){
	      	var tmp=blh.existKey('azerty', 'anniversaire');
	      	if(tmp != false){
	      		throw (new Error('Error existKey'));
	      	}
		})
	})
	describe(JSON.stringify(a), function(){
		it('3.1 - null', function(){
	      	var tmp=blh.existKey(a, null);
	      	if(tmp != false){
	      		throw (new Error('Error existKey'));
	      	}
		})
		it('3.2 - ResponseStatus', function(){
	      	var tmp=blh.existKey(a, 'ResponseStatus');
	      	if(tmp != true){
	      		throw (new Error('Error existKey'));
	      	}
		})
		it('3.4 - prenom', function(){
	      	var tmp=blh.existKey(a, 'prenom');
	      	if(tmp != true){
	      		throw (new Error('Error existKey'));
	      	}
		})
		it('3.5 - anniversaire', function(){
	      	var tmp=blh.existKey(a, 'anniversaire');
	      	if(tmp != false){
	      		throw (new Error('Error existKey'));
	      	}
		})
	})
	describe(JSON.stringify(a), function(){
		it('3.1 - null', function(){
	      	var tmp=blh.existKey(a, null);
	      	if(tmp != false){
	      		throw (new Error('Error existKey'));
	      	}
		})
		it('3.1 - null', function(){
	      	var tmp=blh.existKey(a, {'layout':'user'});
	      	if(tmp != false){
	      		throw (new Error('Error existKey'));
	      	}
		})
		it('3.2 - ResponseStatus', function(){
	      	var tmp=blh.existKey(a, 'ResponseStatus');
	      	if(tmp != true){
	      		throw (new Error('Error existKey'));
	      	}
		})
		it('3.4 - prenom', function(){
	      	var tmp=blh.existKey(a, 'prenom');
	      	if(tmp != true){
	      		throw (new Error('Error existKey'));
	      	}
		})
		it('3.5 - anniversaire', function(){
	      	var tmp=blh.existKey(a, 'anniversaire');
	      	if(tmp != false){
	      		throw (new Error('Error existKey'));
	      	}
		})
	})
	describe(JSON.stringify(b), function(){
		it('3.1 - null', function(){
	      	var tmp=blh.existKey(b, null);
	      	if(tmp != false){
	      		throw (new Error('Error existKey'));
	      	}
		})
		it('3.2 - ResponseStatus', function(){
	      	var tmp=blh.existKey(b, 'ResponseStatus');
	      	if(tmp != true){
	      		throw (new Error('Error existKey'));
	      	}
		})
		it('3.4 - prenom', function(){
	      	var tmp=blh.existKey(b, 'prenom');
	      	if(tmp != true){
	      		throw (new Error('Error existKey'));
	      	}
		})
		it('3.5 - anniversaire', function(){
	      	var tmp=blh.existKey(b, 'anniversaire');
	      	if(tmp != false){
	      		throw (new Error('Error existKey'));
	      	}
		})
	})
})