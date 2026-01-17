// for in on objects

const myObject = {
    js : 'javaScript',
    cpp : "C++",
    rb : "ruby",
    swift : "swift by apple"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
    
}

// for in on array

const pgm = ["js", "c++", "ruby", "python", "react"]

for (const key in pgm) {
    console.log(pgm[key])
}

const map = new Map()
map.set("IN", "India")
map.set('USA', 'United States Of America')
map.set('FR', "France")
map.set("IN", "India")

for (const key in map) {
    console.log(key);
}