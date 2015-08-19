var fs = require('fs');
var array = process.argv;
var textFile = array[2];

fs.readFile(textFile, 'utf8',
  function (err, data){
    var array = data.split('\n');
    console.log(array.length-1);
  });


