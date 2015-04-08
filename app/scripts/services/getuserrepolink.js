'use strict';

/**
 * @ngdoc service
 * @name godviewApp.getUserRepoLink
 * @description
 * # getUserRepoLink
 * Factory in the godviewApp.
 */
angular.module('godviewApp')
  .factory('getUserRepoLink', function () {
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
