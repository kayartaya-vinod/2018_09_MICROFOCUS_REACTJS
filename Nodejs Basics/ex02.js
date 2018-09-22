// ES5 and prior
// constructor for initializing object members
function Person(fname, lname, email, phone) {
    this.firstname = fname || undefined;
    this.lastname = lname || undefined;
    this.email = email || undefined;
    this.phone = phone || undefined;
}

Person.prototype.info = function() {
    console.log('Name = ' + this.firstname + ' ' + this.lastname);
    console.log('Contact details = ' + this.email + ', ' + this.phone);
}

// new --> creates an instance (of type Object)
// call to Person() function to initialize the newly constructed object
var p1 = new Person('Vinod', 'Kumar');
p1.info();