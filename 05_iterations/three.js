// Array specifics loop 

// for of 

const arr = [1, 2, 3, 4, 5]

for (const val of arr) {
    console.log(`Value ${val}`);
}

const greet = "My Sage"

for (const element of greet) {
    console.log(`Each char : ${element}`);
}

const map = new Map()
map.set("IN", "India")
map.set('USA', 'United States Of America')
map.set('FR', "France")
map.set("IN", "India") // value will not repeat 

console.log(map);

for (const [key,value] of map) {
    console.log(key, ':-', value);
}

const myObject = {
    'Game1' : 'NFS',
    'Game2' : 'Spiderman' 
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value)
// } // myObject is not iterable

 