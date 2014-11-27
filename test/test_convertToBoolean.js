var assert = require("assert");
var should = require('should');
var blh=require('../index');

describe('convAttributToBoolean', function(){
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
	describe("null", function(){
		it('1.1 - convert null', function(){
	      	var tmp=blh.convAttributToBoolean(null, null);
	      	if(tmp !== null){
	      		throw (new Error('Error convertion Boolean'));
	      	}
	    })
		it('1.2 - convert '+JSON.stringify(['ResponseStatus','numOrder', 'toto' ,{'layout':{'user':[,'titi','age']}}]), function(){
	      	var tmp=blh.convAttributToBoolean(null, ['ResponseStatus','numOrder', 'toto' ,{'layout':{'user':[,'titi','age']}}]);
	      	if(tmp !== null){
	      		throw (new Error('Error convertion Boolean'));
	      	}
	    })
	})
	describe(JSON.stringify(a), function(){
		it('2.1 - convert null', function(){
	      	var tmp=blh.convAttributToBoolean(a, null);
	      	if(tmp.ResponseStatus !== '1' || tmp.message !== 'tout est OK' || tmp.numOrder !== '1234567' || tmp.layout.user.age !== " 21   " || tmp.layout.user.marrie!="OUI"){
	      		throw (new Error('Error convertion Boolean'));
	      	}
	    })
		it('2.2 - convert '+JSON.stringify(['ResponseStatus','numOrder',{'layout':{'user':'age'}},{'layout':{'user':'marrie'}},{'layout':{'user':'celibataire'}}]), function(){
	      	var tmp=blh.convAttributToBoolean(a, ['ResponseStatus','message','numOrder',{'layout':{'user':'age'}},{'layout':{'user':'marrie'}},{'layout':{'user':'nom'}},{'layout':{'user':'celibataire'}}]);
	      	if(tmp.ResponseStatus !== true || tmp.message !== 'tout est OK' || tmp.numOrder !== '1234567' || tmp.layout.user.age !== " 21   " || tmp.layout.user.marrie!=true|| tmp.layout.user.celibataire!=false){
	      		throw (new Error('Error convertion Boolean'));
	      	}
	    })
		it('2.5 - convert '+JSON.stringify(['ResponseStatus','numOrder', 'toto' ,{'layout':{'user':[,'titi','age']}}]), function(){
	      	var tmp=blh.convAttributToBoolean(a, ['ResponseStatus','numOrder', 'toto' ,{'layout':{'user':['titi','marrie','age','nom']}}]);
	      	if(tmp.ResponseStatus !== true || tmp.message !== 'tout est OK' || tmp.numOrder !== '1234567' || tmp.layout.user.age !== " 21   " || tmp.layout.user.marrie!=true){
	      		throw (new Error('Error convertion Boolean'));
	      	}
	    })
		it('2.7 - convert '+JSON.stringify({'layout':{'user':[,'titi','age']}}), function(){
	      	var tmp=blh.convAttributToBoolean(a, {'layout':{'user':[,'titi','marrie']}});
	      	if(tmp.ResponseStatus !== '1' || tmp.message !== 'tout est OK' || tmp.numOrder !== '1234567' || tmp.layout.user.age !== " 21   " || tmp.layout.user.marrie!=true){
	      		throw (new Error('Error convertion Boolean'));
	      	}
	    })
		it('2.8 - convert '+JSON.stringify(function fct(a,b){null;}), function(){
	      	var tmp=blh.convAttributToBoolean(a, function fct(a,b){null;});
	      	if(tmp.ResponseStatus !== '1' || tmp.message !== 'tout est OK' || tmp.numOrder !== '1234567' || tmp.layout.user.age !== " 21   " || tmp.layout.user.marrie!="OUI"){
	      		throw (new Error('Error convertion Boolean'));
	      	}
	    })
	})
	describe(JSON.stringify("  O  "), function(){
		it('3.1 - convert '+JSON.stringify(['ResponseStatus','numOrder', 'toto' ,{'layout':{'user':[,'titi','age']}}]), function(){
	      	var tmp=blh.convAttributToBoolean("  O  ", ['ResponseStatus','numOrder', 'toto' ,{'layout':{'user':[,'titi','age']}}]);
	      	if(tmp !== true){
	      		throw (new Error('Error convertion Boolean'));
	      	}
	    })
	})
	describe(JSON.stringify(false), function(){
		it('3.1 - convert '+JSON.stringify(['ResponseStatus','numOrder', 'toto' ,{'layout':{'user':[,'titi','age']}}]), function(){
	      	var tmp=blh.convAttributToBoolean(false, ['ResponseStatus','numOrder', 'toto' ,{'layout':{'user':[,'titi','age']}}]);
	      	if(tmp !== false){
	      		throw (new Error('Error convertion Boolean'));
	      	}
	    })
	})
	describe(JSON.stringify("  toto  "), function(){
		it('4.1 - convert '+JSON.stringify(['ResponseStatus','numOrder', 'toto' ,{'layout':{'user':[,'titi','age']}}]), function(){
	      	var tmp=blh.convAttributToBoolean("  toto  ", ['ResponseStatus','numOrder', 'toto' ,{'layout':{'user':[,'titi','age']}}]);
	      	if(tmp !== "  toto  "){
	      		throw (new Error('Error convertion Boolean'));
	      	}
	    })
	})
})