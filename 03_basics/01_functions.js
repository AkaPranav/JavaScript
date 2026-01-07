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

