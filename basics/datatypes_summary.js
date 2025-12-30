// JavaScript is a dynamically typed 

// primitive -> call by value

// these are of 7 types : String, Number, boolean, null, undefined, Symbol, BigInt


// non - primitive -> call by reference

// array, objects, functions


// JavaScript is dynamically typed
let data = 10;        // number
data = "Hello";      // string
data = true;         // boolean

console.log(data);   // true


// ===== Primitive (Call by Value) =====
let a = 5;
let b = a;    // copy of value

b = 10;

console.log(a); // 5  (original not changed)
console.log(b); // 10


// ===== Non-Primitive (Call by Reference) =====
let obj1 = { name: "JS" };
let obj2 = obj1;   // reference copy

obj2.name = "JavaScript";

console.log(obj1.name); // JavaScript (original changed)
console.log(obj2.name); // JavaScript


// ===== Array Example (Reference) =====
let arr1 = [1, 2, 3];
let arr2 = arr1;

arr2.push(4);

console.log(arr1); // [1, 2, 3, 4]
console.log(arr2); // [1, 2, 3, 4]


// ===== Function =====
function greet() {
  console.log("Hello World");
}

greet();
