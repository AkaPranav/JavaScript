// ================== Arrays ================== 

const mixArray = [0, 1, 2, 3, 4, 5, true, "Pranav"] 
const arr = ["pranav", "sage"]
                                    // -> These are some methods to create array 
const arr1 = new Array(1, 2, 3, 4, 5)
// in JS array can be of mixed datatypes 
// in JS arrays are resizable 

const myArr = [0, 1, 2, 3, 4, 5] 

console.log(myArr[1]) //accessing elements in the array 

// ===================== Array method =====================

myArr.push(6) // Insert the element at the last 
myArr.push(7)
myArr.pop() // Removes the last element of the array 

myArr.unshift(0,1,2) // Insert the element at the start of the array by shifting the previous elements 
myArr.shift()
myArr.shift()
myArr.shift()
myArr.shift()

console.log(myArr)



console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

const newArr = myArr.join()

console.log(myArr);
console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);