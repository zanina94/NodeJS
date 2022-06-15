var http = require('http');
const { argv } = require('process');

// Options to be used by request 
var url1 = argv[2] ;
var url2 = argv[3];
var url3 = argv[4];
// Callback function is used to deal with a response
var callback = function(response) {
   // Continuously update stream with data
   var body = '';
   response.on('data', function(data) {
      body += data;
   });
   
   response.on('end', function() {
      // Data received completely.
      console.log(body);
   });
}
// Make a request to the server
var req1 = http.get(url1, callback);
req1.end();
var req2 = http.get(url2, callback);
req2.end();
var req3 = http.get(url3, callback);
req3.end();