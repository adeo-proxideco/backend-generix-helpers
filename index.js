/* jshint -W100 */
/*────────────────────────────────────────────────────────────────────────────────────────*\
│                   ;          Copyright (C) 2014 Groupe Adeo / CSP Proximité Déco         │
│                  ;;                                                                      │
│                 :;.     Licensed under the Apache License, Version 2.0 (the "License");  │
│                ,;;      you may not use this file except in compliance with the License. │
│                ;;;      You may obtain a copy of the License at                          │
│       ;;;      :;                                                                        │
│    ,;;  ;    ,;;:    :           http://www.apache.org/licenses/LICENSE-2.0              │
│  ;;   ,;.   ;;;;    ;;    :;;                                                            │
│ ,;    ;;   ;; ;;   ::;   .;;;;                                                           │
│.;   ;;:  :;  ;;,   ;;   ;;   ;     Unless required by applicable law or agreed to in     │
│:;  ;;:.  ;: ;;;:  ;;    ;   ;:     writing, software distributed under the License is    │
│:: ;,  , ;; ;;  ;,;;:.:;;;:;;:      distributed on an "AS IS" BASIS,                      │
│ ,:     :  ;,    :   .:   :,        WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,         │
│                                    either express or implied.                            │
│  ++++++++++++++++++++++++++',                                                            │
│                                                                                          │
│   See the License for the specific language governing permissions and                    │
│   limitations under the License.                                                         │
│                                                                                          │
\*────────────────────────────────────────────────────────────────────────────────────────*/
/* jshint +W100 */

'use strict';

var _ = require('underscore');

    _.str = require('underscore.string');
    _.ctrl = require('lib-control-type-for-convert');

 
/**
*	Test si le chemin existe dans un tableau de donnees
*
*   parametre 1: tableau de donnee
*	parametre2: chemin a tester sous forme de tableau
*
*	exemple:
*	a={layout:
*		{user:
*			{
*				nom:'toto', 
*				prenom:'titi'
*			}
*		}
*	}
*
* exist(a, ['layout','user','nom']) => return true
* exist(a, ['layout','user','age']) => return false
*/
var exist = exports.exist = function(a, b){
	if(!a || valueof(a,b)===null){ return false;}
	// if(){
	// 	return false;
	// }
	// for (var i in b){
	// 	var ch=b[i];
	// 	var nm='';
		
	// 	if(typeof ch === "object"){
	// 		ch=b[i][0];
	// 		nm=b[i][1];
	// 	}
			
	// 	if(!a[ch]){
	// 		return false;
	// 	}else{
	// 		if(nm!=''){
	// 			if(_.isArray(a[ch]) ){
	// 				var ok=false;
	// 				for( var j in a[ch]){
	// 					if(a[ch][j]['$']['name'] == nm){
	// 						a=a[ch][j];
	// 						ok=true
	// 						break;
	// 					}
	// 				}
	// 				if(!ok){
	// 					return false;
	// 				}
	// 			}else{
	// 				if(a[ch]['$']['name'] == nm){
	// 						a=a[ch];
	// 				}else{
	// 					return false;
	// 				}
	// 			}
	// 		}else{
	// 			a=a[ch];
	// 		}
	// 	}
	// }
	return true;
};


/**
*	retourne la donnee corespondant a un chemin passe en parametre par rapport a un  dans un tableau de donnees
*
*   parametre 1: tableau de donnee
*	parametre2: chemin a pour lequel on veut recuperer la donne
*
*	exemple:
*	a={layout:
*		{user:
*			{
*				nom:'toto', 
*				prenom:'titi'
*			}
*		}
*	}
*
* valueof(a, ['layout','user','nom']) => return toto
* valueof(a, ['layout','user','age']) => return null
*/
var valueof = exports.valueof = function(a, b){
	//if(!this.exist(a,b)) return null;
	if(!a){
		return null;
	}

	for (var i in b){
		var ch=b[i];
		var nm='';
		
		if(typeof ch === 'object'){
			ch=b[i][0];
			nm=b[i][1];
		}
			
		if(!a[ch]){
			return null;
		}else{
			if(nm!==''){
				if(_.isArray(a[ch]) ){
					var ok=false;
					for( var j in a[ch]){
						if(a[ch][j].$.name === nm){
							a=a[ch][j];
							ok=true;
							break;
						}
					}
					if(!ok){
						return null;
					}
				}else{
					if(a[ch].$.name === nm){
							a=a[ch];
					}else{
						return null;
					}
				}				
			}else{
				a=a[ch];
			}
		}
	}

	return a;
};


/**
*	converti en integer les valeurs des attributs d'un objet passé en parametre
*
*   parametre 1: objet
*	parametre2: liste des attributs sous forme de tableau ou objet
*
*	exemple:
*	a={
*		ResponseStatus: "1",
*		numOrder: "1234567",
*		message: "tout est OK"
*	}
*
* convAttributToInteger(a, ['ResponseStatus','numOrder']) => {
*		ResponseStatus: 1,
*		numOrder: 1234567,
*		message: "tout est OK"
*	}
*/
var convAttributToInteger = exports.convAttributToInteger = function(data, lst){
	if(!lst || !data ){
		return data;
	}
	if(_.ctrl.isString(data)){
		if(_.ctrl.isInteger(data)){
			data=parseInt(data,10);
		}
		return data;
	}
	var result=_.clone(data);
	
	if(_.ctrl.isString(lst)){
		if(result[lst] && _.ctrl.isInteger(result[lst])){
			result[lst]=parseInt(result[lst],10);
		}
	}else if(Object.prototype.toString.call(lst)==='[object Array]'){
		for (var i in lst){
			var tmp= convAttributToInteger(result, lst[i]); 
			result=tmp;
		}
	}else if(Object.prototype.toString.call(lst)==='[object Object]'){
		for (var j in lst){
			var tmpAtt=convAttributToInteger(result[j], lst[j]);
			result[j]=tmpAtt;
		}
	}

	return result;
};


/**
*	converti en boolean les valeurs des attributs passe en parametre
*
*   parametre 1: tableau de donnee
*	parametre2: liste des attributs
*
*	exemple:
*	a={
*		ResponseStatus: "1",
*		numOrder: "1234567",
*		ok: "true"
*	}
*
* toInteger(a, ['ResponseStatus','numOrder']) => {
*		ResponseStatus: 1,
*		numOrder: "1234567",
*		ok: true
*	}
*/
var convBooleanGnx=function(data){
	var tmp=_.str.trim(data.toString());
	tmp=tmp.toLowerCase();
	if(_.findWhere(['true','o','y','yes','oui','1'], tmp)){
		return true;
	}else if(_.findWhere(['false','n','no','non', '0'], tmp)){
		return false;
	}else{
		return data;
	}
};
var convAttributToBoolean = exports.convAttributToBoolean = function(data, lst){
	if(!lst || !data ){
		return data;
	}
	if(_.ctrl.isString(data)){
		return convBooleanGnx(data);
	}

	var result=_.clone(data);	
	if(_.ctrl.isString(lst)){
		if(result[lst]){
			result[lst]=convBooleanGnx(result[lst]);
		}
	}else if(Object.prototype.toString.call(lst)==='[object Array]'){
		for (var i in lst){
			var tmp= convAttributToBoolean(result, lst[i]); 
			result=tmp;
		}
	}else if(Object.prototype.toString.call(lst)==='[object Object]'){
		for (var j in lst){
			var tmpAtt=convAttributToBoolean(result[j], lst[j]);
			result[j]=tmpAtt;
		}
	}
	
	return result;
};


// /**
// *	recherche dans tout le fluxXml si une cle existe
// *
// *   parametre 1: tableau de donnee
// *	parametre2: la clé a rechercher
// *
// *	exemple:
// *	a={
// *		ResponseStatus: "1",
// *		numOrder: "1234567",
// *		listofBL:{
// *			numBL: 123333333,
// *			error: "indexofbound"
// *		}
// *		ok: "true"
// *	}
// *
// * existKey(a, 'error') => true
// */
var existKey = exports.existKey = function(data, key){
	if (whereKey(data,key)===null){
		return false;
	}else{
		return true;
	}
};
// /**
// *	recherche dans tout le fluxXml le chemin d'une cle
// *
// *   parametre 1: tableau de donnee
// *	parametre2: la clé a rechercher
// *
// *	exemple:
// *	a={
// *		ResponseStatus: "1",
// *		numOrder: "1234567",
// *		listofBL:{
// *			numBL: 123333333,
// *			error: "indexofbound"
// *		}
// *		ok: "true"
// *	}
// *
// * whereKey(a, 'error') => ['listofBL','error']
// */
var whereKey = exports.whereKey = function(data, key){
	if(!data || !key){
		return null;
	}
	if(Object.prototype.toString.call(data)!=='[object Array]' && Object.prototype.toString.call(data)!=='[object Object]'){
		return null;
	}
	if(!_.ctrl.isString(key)){
		return null;
	}
	if (data && data[key] ){
		return [key];
	}

	for (var i in data){
		if(typeof data[i] ==='object' ) {
			var result =whereKey(data[i], key);
			if(result) {
				result.unshift(i); 
				return result;
			}
		}
	}
	return null;
};


// /**
// *	helper de controle du flux XML Generix
// *
// *   parametre 1: parametre err du parser xml2js
// *	parametre2: fluxXML genrix sous forme de XML (trasformer par xml2js)
// *
// *	en cas d'erreur, le heper répondra au client 'res.json' et retournera false
// */
var fluxXmlGnxIsOk = exports.fluxXmlGnxIsOk = function(err, fluxXml, next){
    if(err){
        var error_err=new Error('ERR_PARSING');
        error_err.detail=err.message + ' - ' + (err.detail || '');
        error_err.code='ERR_GNX';
        error_err.ResponseStatus=0;
        error_err.HttpCode=500;
        next(error_err);
        return false;
    }
                        
    var chmErrorInFlux =whereKey(fluxXml,'error');
    if(chmErrorInFlux){                        
        chmErrorInFlux.push('_');
        var e=valueof(fluxXml, chmErrorInFlux);

        var error_flux=new Error('ERR_IN_FLUX');
        error_flux.detail= e || '';
        error_flux.code='ERR_GNX';
        error_flux.ResponseStatus=0;
        error_flux.HttpCode=500;
        next(error_flux);
        return false;

        // res.json({
        //     ResponseStatus: 0,
        //     Error:{
        //         code: 'ERR_GNX'
        //         , message: 'ERR_IN_FLUX'
        //         , detail: error || ''
        //         // ,stack: err.stack
        //     }
        // });
        // return false;
    }
    
    var vueUtilisateurCourantSociete_row=valueof(fluxXml, ['layout_data','VueUtilisateurCourantSociete','JUt_UtiView','JUt_UtiViewRow']);
    var vudContexteMetier_row=valueof(fluxXml, ['layout_data','VudContexteMetier','Dynamic','DynamicRow']);
	if(!vueUtilisateurCourantSociete_row && !vudContexteMetier_row){
        var error_hab=new Error('ERR_GNX_VUE_USER');
        error_hab.detail= '';
        error_hab.code='ERR_GNX';
        error_hab.ResponseStatus=0;
        error_hab.HttpCode=500;
        next(error_hab);
        return false;

        // res.json({
        //     ResponseStatus: 0,
        //     Error:{
        //         code: 'ERR_GNX'
        //         , message: e.message || ''
        //         , detail: e.detail || ''
        //         // ,stack: err.stack
        //     }
        // });
        // return false;
    }

    return true;
};
