var http = require('http');

var server = http.createServer(function(req, res){
  console.log('test');

});

server.listen(3000);
