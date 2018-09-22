// object destructuring

let p1 = {
    fname: 'vinod',
    lname: 'kumar',
    email: 'vinod@vinod.co',
    phone: '9731424784'
};

// let phone = p1.phone;
// let email = p1.email;

// ES6 style of object destructuring:
let { phone, email, city } = p1;

console.log('Email, Phone, City = ', email, phone, city);

let id = 120, name = 'John Doe', salary = 15000.0;
// ES5 and prior
let e1 = { 'id': id, "name": name, salary: salary };
// ES6 onwards:
let e2 = { id, name, salary, dept: 'Admin' };

console.log('e1', e1);
console.log('e2', e2);

let nums = [12, 34, 56];
let [a, , b, c, d] = nums;
console.log(`a=${a}, b=${b}, c=${c}, d=${d}`);

// two references; one object
let p2 = p1;

let p3 = { ...p1 };
console.log('p1 is', p1);
console.log('p2 is', p2);
console.log('p3 is', p3);

console.log('p1===p2 is', p1 === p2);
console.log('p1===p3 is', p1 === p3);

// city --> new prop
// phone --> overrides the prop from p1
let p4 = { ...p1, city: 'Bangalore', phone: '9844083934' }
console.log('p4 is', p4);

let nums1 = [99, 88, ...nums];
console.log('nums1 is', nums1);
