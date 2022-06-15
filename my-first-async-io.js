const fs = require('fs');
const { argv } = require('process');
fs.readFile(argv[2],function(err,data){
 if(err){
    console.log.error(err);
 }
 console.log(data.toString().split('\n').length-1);
});

 
