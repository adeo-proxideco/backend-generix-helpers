var assert = require("assert");
var blh=require('../index');


describe('whereKey', function(){
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
	      	var tmp=blh.whereKey(null, null);
	      	if(tmp != null){
	      		throw (new Error('Error whereKey'));
	      	}
		})
		it('1.2 - null', function(){
	      	var tmp=blh.whereKey(null, null);
	      	if(tmp != null){
	      		throw (new Error('Error whereKey'));
	      	}
		})
	})
	describe('azerty', function(){
		it('2.2 - null', function(){
	      	var tmp=blh.whereKey('azerty', null);
	      	if(tmp != null){
	      		throw (new Error('Error whereKey'));
	      	}
		})
		it('2.3 - ResponseStatus', function(){
	      	var tmp=blh.whereKey('azerty', 'ResponseStatus');
	      	if(tmp != null){
	      		throw (new Error('Error whereKey'));
	      	}
		})
		it('2.5 - prenom', function(){
	      	var tmp=blh.whereKey('azerty', 'prenom');
	      	if(tmp != null){
	      		throw (new Error('Error whereKey'));
	      	}
		})
		it('2.6 - anniversaire', function(){
	      	var tmp=blh.whereKey('azerty', 'anniversaire');
	      	if(tmp != null){
	      		throw (new Error('Error whereKey'));
	      	}
		})
	})
	describe(JSON.stringify(a), function(){
		it('3.1 - null', function(){
	      	var tmp=blh.whereKey(a, null);
	      	if(tmp != null){
	      		throw (new Error('Error whereKey'));
	      	}
		})
		it('3.2 - ResponseStatus', function(){
	      	var tmp=blh.whereKey(a, 'ResponseStatus');
	      	if(JSON.stringify(tmp) != JSON.stringify(['ResponseStatus'])){
	      		throw (new Error('Error whereKey'));
	      	}
		})
		it('3.4 - prenom', function(){
	      	var tmp=blh.whereKey(a, 'prenom');
	      	if(JSON.stringify(tmp) != JSON.stringify(['layout','user','prenom'])){
	      		throw (new Error('Error whereKey'));
	      	}
		})
		it('3.5 - anniversaire', function(){
	      	var tmp=blh.whereKey(a, 'anniversaire');
	      	if(tmp != null){
	      		throw (new Error('Error whereKey'));
	      	}
		})
		it('3.6 - null', function(){
	      	var tmp=blh.whereKey(a, {'layout':'user'});
	      	if(tmp != null){
	      		throw (new Error('Error whereKey'));
	      	}
		})
	})
	describe(JSON.stringify(b), function(){
		it('4.1 - null', function(){
	      	var tmp=blh.whereKey(b, null);
	      	if(tmp != null){
	      		throw (new Error('Error whereKey'));
	      	}
		})
		it('4.2 - ResponseStatus', function(){
	      	var tmp=blh.whereKey(b, 'ResponseStatus');
	      	if(JSON.stringify(tmp) != JSON.stringify(['0','ResponseStatus'])){
	      		throw (new Error('Error whereKey'));
	      	}
		})
		it('4.4 - prenom', function(){
	      	var tmp=blh.whereKey(b, 'prenom');
	      	if(JSON.stringify(tmp) != JSON.stringify(['3','layout','user','prenom'])){
	      		throw (new Error('Error whereKey'));
	      	}
		})
		it('4.5 - anniversaire', function(){
	      	var tmp=blh.whereKey(b, 'anniversaire');
	      	if(tmp != null){
	      		throw (new Error('Error whereKey'));
	      	}
		})
	})
})