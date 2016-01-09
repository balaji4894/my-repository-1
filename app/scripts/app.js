'use strict';

/**
 * @ngdoc overview
 * @name bootstrapLearningApp
 * @description
 * # bootstrapLearningApp
 *
 * Main module of the application.
 */
angular
  .module('bootstrapLearningApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
        activetab:'home'
      })
      .when('/tabledemo', {
        templateUrl: 'views/tableDemo.html',
        controller: '',
        controllerAs: '',
        activetab:'tabledemo'
      })
      .when('/wkcg', {
        templateUrl: 'views/wkcg.html',
        controller:'WkcgCtrl',
        controllerAs:'wkcg',
        activetab:'wkcg'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about',
        activetab:'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
