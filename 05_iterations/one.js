// for 

// for (let i = 0; i <= 10; i++) {
//     if (i === 5) {
//         console.log("5 is the best number!")
//     }
//     console.log(i);
// }


for (let i = 0; i <= 5; i++) {
    console.log(`=================== Outer loop ${i} ===================`)    
    for (let j = 0; j <= 3; j++) {
        console.log(`Inner loop ${j}`)
    }
}

console.log("=================== Iterating Array ===================")

let array = ["iron man","hulk","thor","ant man","vision"]

for (let index = 0; index <= array.length; index++) {
    const element = array[index];
    console.log(element)
}

// =================== Break & Continue ===================

for (let index = 1; index <= 10; index++) {
    if (index == 5) { // 5 will get skip 
        continue
    }
    console.log(`Value of i is ${index}`);
}


for (let index = 1; index <= 10; index++) {
    if (index == 5) { // at 5 the control flow will break 
        break
    }
    console.log(`Value of i is ${index}`);
}