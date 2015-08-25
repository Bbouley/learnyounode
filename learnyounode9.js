var http = require('http');
var bl = require('bl');

  var complete = 0;
  var array = [];

function outputData(){
  for (var i = 2; i < 5; i++) {
    console.log(array[i]);
  }
}

function getData(i){
 http.get(process.argv[i], function(res){
    res.pipe(bl(function(err, data){
     string = data.toString();
     array[i] = string;
     console.log(i + ' : ' + array[i]);
     complete++;
     if (complete === 3){
      outputData();
     }
    }));
  });
}

for (var i = 2; i < process.argv.length; i++) {
  getData(i);
}

