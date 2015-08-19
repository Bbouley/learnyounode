var fs = require('fs');

var array = process.argv;

var textFile = array[2];

// console.log(textFile);

var buffer = fs.readFileSync(textFile);

// console.log(buffer);

var str = buffer.toString();

// console.log(str);

var lines = str.split('\n');

// console.log(lines);

var answer = lines.length-1;

console.log(answer);
