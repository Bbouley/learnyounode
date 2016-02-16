var http = require('http');

http.get(process.argv[2], function(res) {
  res.setEncoding('utf8');
  var str = ''
  res.on('data', function(chunk) {
    str += chunk;
  });
  res.on('end', function() {
    console.log(str.length);
    console.log(str);
  });
})
