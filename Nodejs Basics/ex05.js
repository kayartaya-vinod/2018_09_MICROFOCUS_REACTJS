// function sayHello(name) {
//     return 'Hello, ' + name;
// }

// var sayHello = function(name) {
//     return 'Hello, ' + name;
// }

var nums = [10, 2, 39, 59, 33, 39, 22];

var squares = nums.map(function (num) {
    return num * num;
});

console.log('nums is', nums);
console.log('squares is', squares);
var sqrs = nums.map(num => num * num);
console.log('sqrs is', sqrs);

