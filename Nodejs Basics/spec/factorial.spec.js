// describe(..) --> test suite
// it(..) --> test spec (test case)
var factorial = require('../math').factorial;

describe('Testing math.factorial function', function(){
    // console.log('From inside the test suite...')

    // spec#1
    it('should return 1 for numbers <=1', function(){
        // must contain one or more assertions (matchers)
        let f = factorial(0);
        expect(f).toEqual(1);
        expect(factorial(-5)).toEqual(1);
    });

    // spec#2
    it('should return proper values for positive numbers', function(){
        expect(factorial(5)).toBe(120);
        expect(factorial(10)).toBe(3628800);
    });
});