'use strict';

/**
 * @ngdoc function
 * @name angularRegisterApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularRegisterApp
 */
angular.module('angularRegisterApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
