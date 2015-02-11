var express = require('express')
var app = express()

app.use(express.static(__dirname + '/app'))

var server = app.listen(8000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log(__dirname + '/app');
  console.log('Server listening on port %s', port)
})
