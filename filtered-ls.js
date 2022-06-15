var fs = require("fs");
const path = require('path');
const { argv } = require("process");

fs.readdir(argv[2], function (err, files) {
//this is the callBack function
   if (err) return console.error(err);

   files.forEach(file => {
     if (path.extname(file) == '.'+argv[3])
       console.log(file);
   })
},argv[3]);