#lib-control-type-for-convert [![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/lebretr/lib-control-type-for-convert/trend.png)](https://bitdeli.com/free "Bitdeli Badge") [![Build Status](https://travis-ci.org/lebretr/lib-control-type-for-convert.svg)](https://travis-ci.org/lebretr/lib-control-type-for-convert) [![Dependency Status](https://david-dm.org/lebretr/lib-control-type-for-convert.png)](https://david-dm.org/lebretr/lib-control-type-for-convert)


__About__
===========

Helper for test a data before convert in simple type


__Install__
===========
```
npm install lib-control-type-for-convert
```

__Exemples__
===========
```
var _={};
    _.ctrl=require('lib-control-type-for-convert');
    
_.ctrl.isString('foo') 
=> true

_.ctrl.isString('     ') 
=> false

_.ctrl.isNotEmpty('     ') 
=> false

_.ctrl.isInteger('51') 
=> true

...
```

__Results__
===========

| **Exemplex**     | **isString()** | **isInteger()** | **isNumber()** | **isBoolean()** | **isNotEmpty**
|:-----------------|:---------------|:----------------|:---------------|:----------------|:-------------
|'    '            | true	        |                 |                |                 | 
|''                | true	        |                 |                |                 | 
|'test'            | true	        |                 |                |                 | true
|'123'             | true	        | true            | true           |                 | true
| 123              |    	        | true            | true           |                 | true
|'123.43'          | true	        |                 | true           |                 | true
| 123.43           |     	        |                 | true           |                 | true
|'123,43'          | true	        |                 |                |                 | true
|'true'            | true	        |                 |                | true            | true
| true             |     	        |                 |                | true            | true
|'false'           | true	        |                 |                | true            | true
| false            |     	        |                 |                | true            | true
| null             |     	        |                 |                |                 | 
| undefined        |     	        |                 |                |                 | 
| NaN              |     	        |                 |                |                 | 
|'{}'              | true	        |                 |                |                 | true
| {}               |     	        |                 |                |                 | true
|'[]'              | true	        |                 |                |                 | true
| []               |     	        |                 |                |                 | 
|'function(){}'    | true	        |                 |                |                 | true
| function(){}     |     	        |                 |                |                 | true



__License__
===========

Copyright (C) 2014 Lebret Rémi / Groupe Adeo - CSP Proximité Déco

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.


```
                                             ..7I..                                 
 .,7777 ,777I   7777   7  :7  I777   I777.   .7777,.                                
 ,7     ,7  I  7=   7  7  :7  I7 ?7  7___    ~+777I.                                
 .7   7 ,I~7   7+. .7  7. :7  I77²   7     .,I7777?.                                
 .:7777 ,7  7   .I7I   I77I   I7.    7777  .7.777:+.                                
                                           ,II777?..                                
                                         ..7=+I7.I.                                 
                ........                 .?~?77~~.                                  
            ....7777777?..               .,7777==                                   
            .III777$....I..             .+II77,..                                   
         ..7I777,.   .7.77.           ...:777I:.                                    
       ..7=II+..   ..=77II.        ...?777777...       .....                        
      ...7?7...    .,I777.      ...~7I777777=..      ..7=77:..       ........       
    ..7?I77..     .?~777..     ..~I77I777777. .      .,7777I..      .,+I77777,      
   .,I7=7..     ..=777~,.     ..~I777~.,I77I.       ..II.+77,.     .:+I+7777777..   
  .,~??I.      ..,7777,.     .I7I77+. .7777..       .I7..I77..    .?... ...:7777.   
  ,,7:7..     .~77777..     .+7777..  ?7777.      ..,77~777.    ..I777.     ..77,   
 .I7I7..     .:7777I,..   ..I777~.. .+7777I.      .I777777..    .77777.      .77:   
 :+77.     ..777II7:.    ..7777.. ..I77777+.      .7777II..    .77777..    ..77I.   
 ,77,.   ..?777:.77.    ..7777.  .=77777777.    ..7777....    ..777I..    ..77I:.   
 77I.. ..,77I7...77.   ..=777:. .7I77:..77I    .I7777I.    ...~7I7I.. ...?7777.     
 7I7....777:.....+7....777777..I777,.  ..7I..~7777I..77...~7777777I7~II77777I...    
 .7777777..      ..77777II.777777=.      .:77777..   .77777777....77777777..        
   ..,..           .....    ..,..          ....        .....       ......           
                                                                                    
 .,7777  7777  I777.   I777.  ,777I   7777   7   7  I7   :7777   7777  :7777   7777 
.,7      7___  I7 ?7   I7 ?7  ,7  I  7=   7   7_7   I7   :7   7  7___  :7     7=   7
..7         7  I77²    I77²   ,I~7   7+. .7   7 7   I7   :7   7  7     :7     7+. .7
 .:7777  7777  I7.     I7.    ,7  7   .I7I   7   7  I7   :7777   7777  :7777   .I7I 
```
