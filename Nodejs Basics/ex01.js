console.log('Start of ex01.js');

var num = 12;

// the require(..) returns what is exported from the module (value of module.exprots)
var printMultiplicationTable = require('./myutils');
printMultiplicationTable(num);

// core module, do not use ./os
var os = require('os');
var cpus = os.cpus();
console.log(`Total ${cpus.length} CPUs found!`);

var path = require('path');
var filename = path.join(__dirname, '..', '..', 'a', 'b', '..', 'c', 'd', 'e.txt');
console.log('filename:', filename);

console.log(cpus[0])
console.log('End of ex01.js');