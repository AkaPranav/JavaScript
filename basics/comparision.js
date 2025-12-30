// console.log(2 == 2); // true
// console.log(2 != 2); // false
// console.log(2 >= 4); // false
// console.log(2 <= 4); // true
// console.log(2 < 4); // true
// console.log(2 > 4); // false


console.log("2" > 1)
console.log("02" > 1)

console.log(null > 0) // false
console.log(null < 0) // false
console.log(null == 0) // false
console.log(null >= 0) // true
                                        // => avoid these types of conversion to prevent from any kind of confusion
console.log(undefined < 0) // false
console.log(undefined == 0) // false
console.log(undefined >= 0) // false

// === strictly check 

console.log("2" == 2) // it will give true because it will do type conversion 
console.log("2" === 2) // but it will give false because it also compares the datatypes strictly (no conversion)