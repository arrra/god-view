'use strict';

describe('Service: getUserRepoLink', function () {

  // load the service's module
  beforeEach(module('godviewApp'));

  // instantiate service
  var getUserRepoLink;
  beforeEach(inject(function (_getUserRepoLink_) {
    getUserRepoLink = _getUserRepoLink_;
  }));

  it('should do something', function () {
    expect(!!getUserRepoLink).toBe(true);
  });

});
