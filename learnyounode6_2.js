var fs = require('fs');


module.exports = function(dirName, extension, callback){
  var dataArray =[];
  fs.readdir(dirName, function(err, data){
    if(err){
      return callback(err);
    } else {
      for (var i = 0; i < data.length; i++) {
        if (data[i].indexOf('.'+extension) >= 0){
          dataArray.push(data[i]);
        }
      }
    }
    return callback(null, dataArray);
  });
};


