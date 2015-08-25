var http = require('http');
var bl = require('bl');

http.get(process.argv[2], function(res, req){
  res.pipe(bl(function(err, data){
    var stringData = data.toString();
    console.log(stringData.length);
    console.log(stringData);

  }));
});
