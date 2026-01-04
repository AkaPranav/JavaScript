// Objects using Constructor/Singleton

const tinderUser = new Object() // singleton object
// const tinderUser = {} -> Non - singleton object


tinderUser.id = "123abc"
tinderUser.name = "sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email : "pranavpandey566@gmail.com",
    fullname : { // creating nested object 
        userFullName : {
            firstName : "Pranav",
            lastName : "Pandey"
        }
    }
}

console.log(regularUser.fullname.userFullName) // accessing nested objects

// combining to objects 

const obj1 = { 
    1 : "a",
    2 : "b"
}

const obj2 = { 
    3 : "c",
    4 : "d"
}

// const obj3 = Object.assign({} , obj1, obj2) // {} in parameter act as target and othere arguements as source 
const obj3 = {...obj1, ...obj2}  // this method is more common 
console.log(obj3)


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]