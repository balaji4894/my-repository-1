'use strict';

/**
 * @ngdoc function
 * @name bootstrapLearningApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bootstrapLearningApp
 */
angular.module('bootstrapLearningApp')
  .controller('MainCtrl', function ($scope,$route) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
     $scope.$route = $route;
     $scope.isActive = function(route) {
        return route === $location.path();
    }
  });
