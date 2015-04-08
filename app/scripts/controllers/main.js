'use strict';

/**
 * @ngdoc function
 * @name godviewApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the godviewApp
 */
angular.module('godviewApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
