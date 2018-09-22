// How to import this module?
// ES6 style:
// import {factorial, fibonacci} from './math'
// CommonJS style:
// var math = require('./math'); // then call math.factorial(12)
// var factorial = require('./math').factorial;

// by defualt module.exports is an empty object {}
// we can add new properties like shown below:
module.exports.factorial = function factorial(num) {
    if (num <= 1) return 1;
    return num * factorial(num - 1);
}

module.exports.fibonacci = function (limit) {
    let result = [];
    let a = -1, b = 1;
    for (let i = 0; i < limit; i++) {
        let c = a + b;
        result.push(c);
        a = b;
        b = c;
    }
    return result;
}