var assert = require("assert");
var blh=require('../index');


describe('fluxXmlGnxIsOk', function(){
	var a={
		ResponseStatus: "1",
		numOrder: "1234567",
		message: "tout est OK",
		layout:{
			user:{
				error: {
					object:"address",
					type:"unable access",
					_:'unable to read address'
				},
				nom:'toto', 
				prenom:'titi',
				age: " 21   ",
				marrie: "OUI",
				celibataire: "no",
			}
		}
	}
	var aa={
		ResponseStatus: "1",
		numOrder: "1234567",
		message: "tout est OK",
		layout:{
			user:{
				error: {
					object:"address",
					type:"unable access"
				},
				nom:'toto', 
				prenom:'titi',
				age: " 21   ",
				marrie: "OUI",
				celibataire: "no",
			}
		}
	}
	var b={
		ResponseStatus: "1",
		numOrder: "1234567",
		message: "tout est OK",
		layout_data:{
			VudContexteMetier:{
				Dynamic:{
					DynamicRow:{
						habilitation:{
							GART:true
						}
					}
				}
			},
			VueUtilisateurCourantSociete:{
				JUt_UtiView:{
					JUt_UtiViewRow:{
						produit:{
							codpro:'123456',
							nompro:'mon produit'
						}
					}
				}
			}
		}
	}
	var c={
		ResponseStatus: "1",
		numOrder: "1234567",
		message: "tout est OK",
		layout_data:{
		}
	}

	fct=function(err){ if(err){throw (new Error('Error existKey'));}};

	describe('error', function(){
		it('1.1 - error', function(){
	      	var tmp=blh.fluxXmlGnxIsOk((new Error('test error')), a, function(err){ 
	      		if(!err){
	      			throw (new Error('Error existKey'));
	      		}
	      	});

	      	if(tmp != false){
	      		throw (new Error('Error existKey'));
	      	}
		})
	})

	describe('error', function(){
		it('2.1 - error', function(){
	      	var tmp=blh.fluxXmlGnxIsOk(null, a, function(err){ 
	      		if(!err && err.detail!='unable to read address'){
	      			throw (new Error('Error existKey'));
	      		}
	      	});

	      	if(tmp != false){
	      		throw (new Error('Error existKey'));
	      	}
		})
		it('2.2 - error', function(){
	      	var tmp=blh.fluxXmlGnxIsOk(null, aa, function(err){ 
	      		if(!err && err.detail!=''){
	      			throw (new Error('Error existKey'));
	      		}
	      	});

	      	if(tmp != false){
	      		throw (new Error('Error existKey'));
	      	}
		})
	})

	describe('error', function(){
		it('3.1 - error', function(){
	      	var tmp=blh.fluxXmlGnxIsOk(null, a, function(err){ 
	      		if(!err && err.detail!=''){
	      			throw (new Error('Error existKey'));
	      		}
	      	});

	      	if(tmp != false){
	      		throw (new Error('Error existKey'));
	      	}
		})
	})

	describe('error', function(){
		it('4.1 - error', function(){
	      	var tmp=blh.fluxXmlGnxIsOk(null, b, function(err){ 
	      		if(err){
	      			throw (new Error('Error existKey'));
	      		}
	      	});

	      	if(tmp != true){
	      		throw (new Error('Error existKey'));
	      	}
		})
	})

	describe('error', function(){
		it('5.1 - error', function(){
	      	var tmp=blh.fluxXmlGnxIsOk(null, c, function(err){ 
	      		if(!err && err.detail!=''){
	      			throw (new Error('Error existKey'));
	      		}
	      	});

	      	if(tmp != false){
	      		throw (new Error('Error existKey'));
	      	}
		})
	})

});