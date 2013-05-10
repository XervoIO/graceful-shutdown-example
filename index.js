var http = require('http');

/*
 * Create a simple http server to handle the graceful shutdown requests. The
 * application has 2 seconds before being shutdown after the request is sent.
 */
http.createServer(function (req, res) {
  var data = '';

  // Grab request data
  req.on('data', function(chunk) {
    data += chunk;
  });

  // Once all data is retrieved handle the action
  req.on('end', function() {
    var action = JSON.parse(data);
    switch(action.action) {
      case 'restart' :
        // this is where you handle a restart
        console.log('this was a restart');
        break;
      case 'stop' :
      // this is where you handle a stop
        console.log('this was a stop');
        break;
      case 'deploy' :
      // this is where you handle a deploy
        console.log('this was a deploy');
        break;
    }
    res.statusCode = 200;
    res.end();
  });

}).listen(63002);