let score = null

console.log(typeof score);

let valueInNum = Number(score) // type casting string to num

console.log(typeof valueInNum)
console.log(valueInNum) // NaN -> Not a Number 

// "33" -> 33
// "33abc" -> NaN
// true -> 1; false -> 2
// undefined -> NaN
// null -> 0


let isLoggedIn = "false"

let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn) // true

// "" -> false
// "false" -> true
// 56 -> true
// 0 -> false

let someNumber = "69abc"

let StringNumber = String(someNumber)

console.log(StringNumber)

// 33 -> 33
// "69abc" -> 69abc