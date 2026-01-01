// ======= Memory =======
// 01 -> Stack (primitive)
// 02 -> Heap (non-primitive)

let myName = "Pranav Pandey"

let anotherName = myName
anotherName = "Bloodlust"

console.log(anotherName);
console.log(myName);

let userOne = {
    email : "Pranav@gmail.com",
    upi : 3252
}

let userTwo = userOne

userTwo.upi = 6969


let userThree = {...userOne} // This way you can avoid modifying original object

userThree.upi = 5656

console.log(userThree);
console.log(userOne);
console.log(userTwo);
