(function() {
	'use strict';

	angular
		.module('app')
		.controller('HomeController', HomeController);

		HomeController.$injector = ['HomeService', '$state']

		function HomeController(HomeService, $state) {
			console.log('HomeController')
		}
})();