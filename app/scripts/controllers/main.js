'use strict';

/**
 * @ngdoc function
 * @name godviewApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the godviewApp
 */
angular.module('godviewApp')
  .controller('MainCtrl', function ($scope,RepoLink) {
    $scope.getDataFromGithub = function() {
    var user = RepoLink;
    user.link.repoLink1 = $scope.repoLink1;
    user.link.repoLink2 = $scope.repoLink2;
    user.link.repoLink3 = $scope.repoLink3;
    };



  });
