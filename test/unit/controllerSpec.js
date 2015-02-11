'use strict';

/* Controllers */

describe("Hiza Swenet Website's controllers", function() {

  describe("The body's Controller", function() {

    beforeEach(module('hizaApp'));
    beforeEach(module('hizaControllers'));

    it("should create a model with Fathi's name", inject(function($controller) {
      var scope = {},
        controller = $controller('bodyController', {$scope:scope});

      expect(scope.company).toBe("Hiza Swenet");
    }))
  });

});
