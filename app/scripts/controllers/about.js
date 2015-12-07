'use strict';

/**
 * @ngdoc function
 * @name bootstrapLearningApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the bootstrapLearningApp
 */
angular.module('bootstrapLearningApp')
  .controller('AboutCtrl', function ($scope,$route) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

     $scope.$route = $route;
  });
