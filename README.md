##Hiza Swenet Website

#Description:
Basic website for Hiza Swenet (company).

#Commands:
*Pre-run:    npm install   (this should also run bower install)
*E2E test:   npm run protractor
*Unit test:  npm test
*Run server: nodemon server.js   [Note: runs on port 8000]
*Installing backend dependencies: npm install <moduleName> --save
*Installing frontend dependencies: bower install <moduleName>
  E.g: bower install bootstrap
*Uninstalling backend dependencies: bower uninstall <moduleName>


#(Used) Dependencies:
**Bower Components:**
  Angular
  Angular-mocks
**Node Modules:**
  Express
  Bower
  Karma, Jasmine, and related
  Protractor


#Notes:
Everything related to the front-end is contained in hizaSwenet/app.
The back-end is pretty basic and for now (ignoring tests) comprises
just the server.js which serves up a basic html page i.e index.
All routing in the future would be done via angular-route on the
front end ... hopefully.
