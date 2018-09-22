const Person = require('./ex03').Person;
const Employee = require('./ex03').Employee;

let p1 = new Person('Ravi', 'Kumar', 'Mysore');
let e1 = new Employee('John', 'Doe', 25000, 'Administration');

p1.info();
console.log('---------------')
e1.info();