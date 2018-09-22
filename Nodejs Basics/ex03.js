class Person {

    constructor(fname = '', lname = '', city = 'Bangalore') {
        this.firstname = fname;
        this.lastname = lname;
        this.city = city;
    }
    info() {
        console.log(`Name = ${this.firstname} ${this.lastname}`);
        console.log(`City = ${this.city}`);
    }
}

class Employee extends Person {
    constructor(firstname, lastname, salary, department) {
        super(firstname, lastname);
        this.salary = salary || 15000;
        this.department = department || 'BENCH';
    }

    info() {
        super.info();
        // using the arrow function, 'this' keyword does not
        // switch context. It still refers to the invoking 
        // object, using which the method info() was called
        setTimeout(() => {
            console.log(`Salary = Rs.${this.salary}`);
            setTimeout(() => {
                console.log(`Department = ${this.department}`);
            }, 2000);
        }, 3000);

        console.log('End of info() function call.')
    }
}

module.exports.Person = Person;
module.exports.Employee = Employee;