'use strict';

describe('Hiza Swenet website', function() {

    describe('Homepage view', function() {

      it('should say hello to Fathi', function(){
        browser.get('/');
        expect(element(by.css('h1')).getText()).toBe('Hello, Fathi!')
      });

    });
});
