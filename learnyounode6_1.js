var fs = require('fs');
var module = require('./learnyounode6_2.js');


module(process.argv[2], process.argv[3], function(err, data){
  if(err){
    return console.log(err);
  } else {
    for (var i = 0; i < data.length; i++) {
      console.log(data[i]);
    }
  }
});

