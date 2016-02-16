module.exports = function(dirName, fileExt, callback) {
  if(dirName.split('.')[1] === fileExt) {
    return callback(null, dirName);
  };
}
