// Immediately Invoked Function Expression (IIFE):

// Named IIFE
(function dbConnect(user){
    console.log(`Hello, ${user} Database Connected`)
})("Named");

// It is same as the dbConnected() with parameter or without parameter but wraped in () and for calling with wraped function and () with argument or without argument i.e ()().



// UnNamed IIFE
((user) => {
    console.log(`Hello, ${user} Database Connected`)
})("UnNamed");

// It is same as the UnNamed Arrow function with parameter or without parameter but wraped in () and for calling with wraped function and () with argument or without argument i.e ()().


// NOTE: IIFE is used to keep away from the Golbal pollution and it is neccesary to use semi coloun to end the IIFE.
