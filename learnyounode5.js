var fs = require('fs');
var array = process.argv;

var extension = array[3];

fs.readdir(array[2], function(err, list){
  var fileListArray = [];
  for (var i = 0; i < list.length; i++) {
    if(list[i].indexOf('.'+extension) >= 0){
      console.log(list[i]);
    }
  }
});
