var assert = require("assert");
var should = require('should');
var blh=require('../index');

describe('convAttributToInteger', function(){
	var a={
		ResponseStatus: "1",
		numOrder: "1234567",
		message: "tout est OK",
		layout:{
			user:{
				nom:'toto', 
				prenom:'titi',
				age: " 21   "
			}
		}
	}
	describe("null", function(){
		it('convert null', function(){
	      	var tmp=blh.convAttributToInteger(null, null);
	      	if(tmp !== null){
	      		throw (new Error('Error convertion integer'));
	      	}
	    })
		it('convert '+JSON.stringify(['ResponseStatus','numOrder', 'toto' ,{'layout':{'user':[,'titi','age']}}]), function(){
	      	var tmp=blh.convAttributToInteger(null, ['ResponseStatus','numOrder', 'toto' ,{'layout':{'user':[,'titi','age']}}]);
	      	if(tmp !== null){
	      		throw (new Error('Error convertion integer'));
	      	}
	    })
	})
	describe(JSON.stringify(a), function(){
		it('convert null', function(){
	      	var tmp=blh.convAttributToInteger(a, null);
	      	if(tmp.ResponseStatus !== '1' || tmp.numOrder !== '1234567' || tmp.layout.user.age !== " 21   "){
	      		throw (new Error('Error convertion integer'));
	      	}
	    })
		it('convert '+JSON.stringify(['ResponseStatus','numOrder',{'layout':{'user':'age'}}]), function(){
	      	var tmp=blh.convAttributToInteger(a, ['ResponseStatus','numOrder',{'layout':{'user':'age'}}]);
	      	if(tmp.ResponseStatus !== 1 || tmp.numOrder !== 1234567 || tmp.layout.user.age !== 21){
	      		throw (new Error('Error convertion integer'));
	      	}
	    })
		it('convert '+JSON.stringify(['ResponseStatus','message',{'layout':{'user':'age'}}]), function(){
	      	var tmp=blh.convAttributToInteger(a, ['ResponseStatus','message',{'layout':{'user':'age'}}]);
	      	if(tmp.ResponseStatus !== 1 || tmp.message !== 'tout est OK' || tmp.layout.user.age !== 21){
	      		throw (new Error('Error convertion integer'));
	      	}
	    })
		it('convert '+JSON.stringify(['ResponseStatus','numOrder',{'layout':{'user':'age'}}]), function(){
	      	var tmp=blh.convAttributToInteger(a, ['ResponseStatus','numOrder',{'layout':{'user':'nom'}}]);
	      	if(tmp.ResponseStatus !== 1 || tmp.numOrder !== 1234567 || tmp.layout.user.nom !== 'toto'){
	      		throw (new Error('Error convertion integer'));
	      	}
	    })
		it('convert '+JSON.stringify(['ResponseStatus','numOrder', 'toto' ,{'layout':{'user':[,'titi','age']}}]), function(){
	      	var tmp=blh.convAttributToInteger(a, ['ResponseStatus','numOrder', 'toto' ,{'layout':{'user':['titi','age']}}]);
	      	if(tmp.ResponseStatus !== 1 || tmp.numOrder !== 1234567 || tmp.layout.user.age !== 21){
	      		throw (new Error('Error convertion integer'));
	      	}
	    })
		it('convert '+JSON.stringify(['ResponseStatus','numOrder', 'toto' ,{'layout':{'user':[,'titi','nom']}}]), function(){
	      	var tmp=blh.convAttributToInteger(a, ['ResponseStatus','numOrder', 'toto' ,{'layout':{'user':['titi','nom']}}]);
	      	if(tmp.ResponseStatus !== 1 || tmp.numOrder !== 1234567 || tmp.layout.user.nom !== 'toto'){
	      		throw (new Error('Error convertion integer'));
	      	}
	    })
		it('convert '+JSON.stringify({'layout':{'user':[,'titi','age']}}), function(){
	      	var tmp=blh.convAttributToInteger(a, {'layout':{'user':[,'titi','age']}});
	      	if(tmp.ResponseStatus !== '1' || tmp.numOrder !== '1234567' || tmp.layout.user.age !== 21){
	      		throw (new Error('Error convertion integer'));
	      	}
	    })
		it('convert '+JSON.stringify(function fct(a,b){null;}), function(){
	      	var tmp=blh.convAttributToInteger(a, function fct(a,b){null;});
	      	if(tmp.ResponseStatus !== '1' || tmp.numOrder !== '1234567' || tmp.layout.user.age !== " 21   "){
	      		throw (new Error('Error convertion integer'));
	      	}
	    })
	})
	describe(JSON.stringify("  21  "), function(){
		it('convert '+JSON.stringify(['ResponseStatus','numOrder', 'toto' ,{'layout':{'user':[,'titi','age']}}]), function(){
	      	var tmp=blh.convAttributToInteger("  21  ", ['ResponseStatus','numOrder', 'toto' ,{'layout':{'user':[,'titi','age']}}]);
	      	if(tmp !== 21){
	      		throw (new Error('Error convertion integer'));
	      	}
	    })
	})
	describe(JSON.stringify("  toto  "), function(){
		it('convert '+JSON.stringify(['ResponseStatus','numOrder', 'toto' ,{'layout':{'user':[,'titi','age']}}]), function(){
	      	var tmp=blh.convAttributToInteger("  toto  ", ['ResponseStatus','numOrder', 'toto' ,{'layout':{'user':[,'titi','age']}}]);
	      	if(tmp !== "  toto  "){
	      		throw (new Error('Error convertion integer'));
	      	}
	    })
	})
})