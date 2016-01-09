'usestrict'
/**
 * @ngdoc function
 * @name bootstrapLearningApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the bootstrapLearningApp
 */
angular.module('bootstrapLearningApp')
  .controller('WkcgCtrl', function ($scope,$route) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

     $scope.$route = $route;

  });