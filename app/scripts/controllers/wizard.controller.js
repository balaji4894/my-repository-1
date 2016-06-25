'usestrict'
/**
 * @ngdoc function
 * @name bootstrapLearningApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the bootstrapLearningApp
 */
angular.module('bootstrapLearningApp')
  .controller('WizardCtrl', function ($scope,$route) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

     $scope.$route = $route;
     $scope.finishedWizard=function(){
     	console.log("Wizard finished");
     }
  });