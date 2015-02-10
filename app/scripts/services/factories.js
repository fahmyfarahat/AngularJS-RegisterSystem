'use strict';

/**
 * @ngdoc service
 * @name angularRegisterApp.factories
 * @description
 * # factories
 * Factory in the angularRegisterApp.
 */
angular.module('angularRegisterApp')
  .factory('factories', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
