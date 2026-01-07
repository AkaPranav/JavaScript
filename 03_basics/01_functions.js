// ================== Functions ==================

function sayMyName(){
    console.log("Pranav")
    console.log("Pandey")
}

sayMyName() // -> Function calling 

// function addTwoNum(num1 , num2){
//     console.log(num1 + num2)
// }


addTwoNum() // -> return NaN , There is no arrguement has been passed 
addTwoNum(5 , 4)

// =============== Function with return ===============

function addTwoNum(num1 , num2){
    let result = num1 + num2
    return result
    console.log("executed!") // -> Unreachable code detected
}

const result = addTwoNum(5 , 4)
console.log("Result :", result)

function loginUserMessage(username = "sam"){
    if(username === undefined){ // -> !username 
        console.log("please enter a username!")
        return
    }
    return `${username} just logged in !`
}

console.log(loginUserMessage("Pranav Pandey"))
console.log(loginUserMessage()) // undefined just logged in !

// =============== function with objects & array ===============

function calculateCartPrice(val1 , val2, ...num1){ // ... rest operator
    return num1
}

console.log(calculateCartPrice(500, 200, 600, 350, 450)) // -> [ 600, 350, 450 ]

const user = {
    username : "Pranav",
    price : 199
}

function handleObject(anyObject){
    console.log(`Usernmae is ${anyObject.username} and Price is ${anyObject.price}`)
}

handleObject(user)
handleObject({
    username : "Raze",
    price : "200"
})


const arr = [200, 300, 400, 500, 600, 700]

function returnSecondValue(anyArray){
    return anyArray[1]
}

console.log(returnSecondValue(arr))
console.log(returnSecondValue([20, 30, 40, 50]))
