const fs = require('fs');
const { argv } = require('process');
var data = fs.readFileSync(argv[2]);
var aux = data.toString().split('\n');
    console.log(aux.length-1);
 
