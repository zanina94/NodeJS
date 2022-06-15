var http = require('http');
const { argv } = require('process');

// Options to be used by request 
var url = argv[2] ;

// Callback function is used to deal with a response
var callback = function(response) {
   // Continuously update stream with data
   var body = '';
   response.on('data', function(data) {
      body += data+'\n';
   });
   
   response.on('end', function() {
      // Data received completely.
      console.log(body);
   });
}
// Make a request to the server
var req = http.get(url, callback);
req.end();