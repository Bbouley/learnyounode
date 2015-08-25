var net = require('net');

var port = process.argv[2];

var server = net.createServer(function(socket){
  var date = new Date();
  var year = date.getFullYear().toString();
  var month = (date.getMonth()+1).toString();
  var day = date.getDate().toString();
  var hours = date.getHours().toFixed(0).toString();
  var mins = date.getMinutes().toFixed(0).toString();

  if(month.length<2){
    month = '0'+ month;
  }


  var dateString = year + '-' + month + '-' + day + ' ' + hours + ':' + mins;

  socket.end(dateString);
});

server.listen(port);
