var fs = require('fs');

fs.readdir(process.argv[2], function(err, data) {
  for (var i = 0; i < data.length; i++) {
    if(filter(process.argv[3], data[i]) === true) {
      console.log(data[i]);
    }
  }
});


function filter (filt, str) {
  if(str.split('.')[1] === filt) {
    return true;
  };
};
