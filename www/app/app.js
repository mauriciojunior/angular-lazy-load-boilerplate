(function() {
  'use strict';

  angular
    .module('app', [
      'ui.router',
      'oc.lazyLoad'
    ])
    .config(function($stateProvider, $locationProvider, $urlRouterProvider, $ocLazyLoadProvider){

      $stateProvider
        .state('index', {
          url: '',
          abstract: true,
          controller: 'AppController',
          templateUrl: 'app/layout/layout.html',
          resolve: {
            loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
              return $ocLazyLoad.load('app/layout/layout.controller.js')
            }]
          }
        })

        .state('index.home', {
          url: '/home',
          templateUrl: 'app/home/home.html',
          controller: 'HomeController',
          resolve: {
            loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
              return $ocLazyLoad.load([
                'app/home/home.controller.js',
                'app/home/home.service.js'
              ]);
            }]
          }
        })

        $urlRouterProvider.otherwise('/home');

        $ocLazyLoadProvider.config({
          debug: true,
          events: true,
        })
    })
})();