'use strict';

describe('Service: RepoLink', function () {

  // load the service's module
  beforeEach(module('godviewApp'));

  // instantiate service
  var RepoLink;
  beforeEach(inject(function (_RepoLink_) {
    RepoLink = _RepoLink_;
  }));

  it('should do something', function () {
    expect(!!RepoLink).toBe(true);
  });

});
