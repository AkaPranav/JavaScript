const score = 100
console.log(score)

const balance = new Number(100)
console.log(balance)

console.log(balance.toString(),typeof(balance.toString()))
console.log(balance.toFixed(2))

/*
toPrecision(precision?: number): string
Number of significant digits. Must be in the range 1 - 21, inclusive.

Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.
*/
const otherNumber = 123.48559
console.log(otherNumber.toPrecision(3))

const hundreds = 1000000
console.log(hundreds.toLocaleString("en-IN"))

//================ MATHS ================

console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(4.325))
console.log(Math.ceil(4.325))
console.log(Math.floor(5.325))
console.log(Math.sqrt(9))

console.log(Math.pow(3,3))
/*
(method) Math.pow(x: number, y: number): number
Returns the value of a base expression taken to a specified power.

@param x — The base value of the expression.

@param y — The exponent value of the expression.
*/


// ============== min & max ==============
console.log(Math.min(4, 5, 6, 9))
console.log(Math.max(4, 5, 6, 9))

// ============== random in Math ==============
console.log(Math.random()) // Returns a pseudorandom number between 0 and 1.
console.log((Math.random()*10) + 1) // Returns a pseudorandom number between 1 and 10.
console.log(Math.floor((Math.random()*100) + 1)) // Returns a pseudorandom number between 1 and 100.


// ================ B/W given range ================ 
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1) ) + min) // Returns a pseudorandom number between 10 and 20