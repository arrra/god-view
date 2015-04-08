'use strict';

/**
 * @ngdoc function
 * @name godviewApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the godviewApp
 */
angular.module('godviewApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
