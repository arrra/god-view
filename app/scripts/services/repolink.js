'use strict';

/**
 * @ngdoc service
 * @name godviewApp.RepoLink
 * @description
 * # RepoLink
 * Factory in the godviewApp.
 */

function RepoLink() {
  this.link = {
    repoLink1: '',
    repoLink2: '',
    repoLink3: ''
  };

  this.getRepoLink = function() {
    return this.link;
  };

}

angular.module('godviewApp')
  .factory('RepoLink', function () {

    return new RepoLink();

  });
