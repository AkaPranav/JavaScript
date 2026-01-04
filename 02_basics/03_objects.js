// singleton -> Object.create

// objects literals

const mySym = Symbol("key1")

const Jsuser = { // defining an object 
    name : "Pranav", // we can define our key value pair 
    "full name" : "Pranav Pandey",
    [mySym] : "myKey1", // Symbol acting as a key 
    age : 18,
    location : "Roorkee",
    email : "pandey566@gmail.com",
    isLoggedIn : false,
    lastLogindays : ["Monday", "Saturday"]
}

console.log(Jsuser.email) // this is the one way to access the elements in the object but not the efficient 
// also there is no way that you can access the " " key element using -> . method 
console.log(Jsuser["full name"]) // this way you can access " " key elements too 
console.log(Jsuser[mySym]) // this way you can access Symbol key elements too 

Jsuser["email"] = "pranavpandey566@gmail.com" // changing the value in an Object

console.log(Jsuser["email"])

// ===================== freeze =====================

// Object.freeze(Jsuser) // now you can't change the values in the Object 

Jsuser.age = 19

console.log(Jsuser["age"]) // stills print -> 18

console.log(Jsuser)
/*
{
  name: 'Pranav',
  'full name': 'Pranav Pandey',
  age: 18,
  location: 'Roorkee',
  email: 'pranavpandey566@gmail.com',
  isLoggedIn: false,
  lastLogindays: [ 'Monday', 'Saturday' ],
  [Symbol(key1)]: 'myKey1'
}
*/

Jsuser.greeting = function(){
    console.log("Hello Js user !!!")
}

Jsuser.greetingTwo = function(){
    console.log(`Hello Js user !!! ${this["full name"]}`)
}

console.log(Jsuser.greeting) // function has been not executed but it returns -> [Function (anonymous)]
console.log(Jsuser.greeting())
console.log(Jsuser.greetingTwo())