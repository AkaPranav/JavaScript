const name = "Pranav"
const kda = 7

// console.log(name + kda + " akaPandey");

console.log(`my name is ${name}, having KDA ${kda}, In game name "akaPandey"`);

const newName = new String("Pranav Pandey")

console.log(newName[0]);
console.log(newName.__proto__)
console.log(`length of newName ${newName.length}`) // String properties 

// ============String Methods============ 

console.log(`lowercase of newName ${newName.toLowerCase()}`)
console.log(`uppercase of newName ${newName.toUpperCase()}`)
console.log(`charAt of newName ${newName.charAt(2)}`)
console.log(`indexOf of newName ${newName.indexOf("n")}`)

console.log(newName)

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));