// A JS file is called as a module
// name of the module is nothing but the name of the file
// "./myutils"

// The following function becomes a locally defined function
// of this module. Acts as a private property of the module
function printTable(num) {
    for(var i=1; i<=10; i++) {
        // console.log(num + ' X ' + i + ' = ' + (num*i) );
        console.log(`${num} X ${i} = ${num*i}`);
    }    
}

console.log('The module myutils.js loaded!');

// since we did not assign anything to module.exports, 
// and module.exports by default represents {},
// the current module represents an empty object

// by assigning "something" to module.exports, we say that
// the module represents that "something"
module.exports = printTable;
