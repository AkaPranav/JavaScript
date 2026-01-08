// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    // Named IIFE
    console.log(`DB Connected!`);
})(); // ; -> is neccessary to tell the IIFE funtion to where to stop 

// chai()

( (name) => {
    console.log(`DB Connected Two! ${name}`)
})('Pranav'); // Treat it as a function 