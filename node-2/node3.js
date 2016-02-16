var fs = require('fs');

function readFile() {
  var str = fs.readFileSync(process.argv[2]).toString();
  var arr = str.split('\n');
  console.log(arr.length - 1);
}

readFile();


