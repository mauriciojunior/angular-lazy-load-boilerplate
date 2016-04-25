(function() {
	'use strict';

	angular
		.module('app')
		.service('HomeService', HomeService);

		function HomeService() {
			return {
				$log: function(message) {
					return console.log(message)
				}
			}
		}
})();