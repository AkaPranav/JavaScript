// Dates

let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toLocaleString())
console.log(myDate.toLocaleDateString())
console.log(typeof myDate) // Object

let myCreatedDate = new Date(2026 , 0, 1)
let myCreatedDate_1 = new Date(2026 , 0, 1, 2, 5)

let myCreatedDate_2 = new Date("2026-01-01")

console.log(myCreatedDate.toDateString())
console.log(myCreatedDate_1.toLocaleString())
console.log(myCreatedDate_2.toLocaleString())

// ================== TimeStamp ==================

let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(myCreatedDate.getTime())
console.log(Math.floor(Date.now()/1000))


// ======================== Methods in Date ========================

let newDate = new Date()
console.log(newDate)
console.log(newDate.getDate())
console.log(newDate.getDay())
console.log(newDate.getMonth()) // 0 -> means jan
console.log(newDate.getFullYear())

// ================ Internationalization in time ================

newDate.toLocaleString('default',{ // customization 
    weekday: "long",
})