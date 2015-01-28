'use strict';

/**
 * @ngdoc function
 * @name angularRegisterApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularRegisterApp
 */
angular.module('angularRegisterApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
