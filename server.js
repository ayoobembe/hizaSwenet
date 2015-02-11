var express = require('express')
var app = express()

app.use(express.static(__dirname + '/app'))

app.get('/app', function (request, response) {
  response.send('Hi!');
});

var server = app.listen(8000, function () {
  var host = server.address().address
  var port = server.address().port

  console.log('Server listening on port %s', port)
})
