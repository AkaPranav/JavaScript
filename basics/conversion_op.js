let score = null

// console.log(typeof score);

let valueInNum = Number(score) // type casting string to num

// console.log(typeof valueInNum)
// console.log(valueInNum) // NaN -> Not a Number 

// "33" -> 33
// "33abc" -> NaN
// true -> 1; false -> 2
// undefined -> NaN
// null -> 0


let isLoggedIn = "false"

let booleanIsLoggedIn = Boolean(isLoggedIn)

// console.log(booleanIsLoggedIn) // true

// "" -> false
// "false" -> true
// 56 -> true
// 0 -> false

let someNumber = "69abc"

let StringNumber = String(someNumber)

// console.log(StringNumber)

// 33 -> 33
// "69abc" -> 69abc


// ******************************Operations******************************

let value = 3
let negValue = -value
// console.log(negValue)

console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 / 2);
console.log(2 ** 3);
console.log(5 % 2);

let str1 = "hello"
let str2 = " pandey"
console.log(str1 + str2)
console.log("1" + 2)
console.log(1 + "2")
console.log("1" + "2")
console.log("1" + 2 + 2)
console.log(1 + 2 + "2")

console.log(+true)
console.log(+"")

let num1 , num2 , num3 
num1 = num2 = num3 = 2 + 2

console.log(num1);

let gameCounter = 100
gameCounter++
++gameCounter
console.log(gameCounter++);
console.log(gameCounter);

