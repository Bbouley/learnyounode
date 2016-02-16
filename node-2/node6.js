var fs = require('fs');
var otherFile = require('./node6-1.js')

fs.readdir(process.argv[2], function(err, data) {
  for (var i = 0; i < data.length; i++) {
    otherFile(data[i], process.argv[3], function(err, data) {
      console.log(data);
    })
  }
});
