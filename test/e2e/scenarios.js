'use strict';

describe('Hiza Swenet website', function() {

    describe('Homepage view', function() {

      it('should say hello to the world', function(){
        browser.get('app/');
        expect(element(by.css('h1')).getText()).toBe('Hello, world!')
      });

    });
});
