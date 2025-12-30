const accountId = 14433
let accountEmail = "akapandey@gmail.com"
var accountPassword = "12345"
accountCity = "Roorkee"
let accountState // if the value is not assigned so it says undefined 

// accountId = 2 // TypeError: Assignment to constant variable.

accountEmail = "rpgpandey@gmail.com"
accountPassword = "696969"
accountCity = "Jaipur" // This is not a good method to reserve the memory but it works ✌️

/*
prefer not use "var" as it can create bloack scope and functional scope problem in your code 
prefer to use "let" 
*/

console.log(accountId, accountEmail);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
