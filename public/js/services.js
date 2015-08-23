'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', [])
	.factory('socket', function (socketFactory) {
    	return socketFactory();
  	})
  	.value('version', '0.1')
  	.value('json_data', {
  		user: [
	  		{id:'DJIWNDIwjiiw', name: 'Bob1'},
	  		{id:'zcDWdwadians', name: 'Bob2'}
  		]
  	})
  	// .value('') // muzyka