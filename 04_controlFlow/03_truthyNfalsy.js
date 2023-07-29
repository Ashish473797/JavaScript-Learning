
// Truthy Value:

"0",  "null",  "undefined",  "NaN",  "false",  " ",  [],  {},  function(){}



// Falsy Value:

0,  -0,  0n,  "",  false,  null,  undefined,  NaN   // where 0n is BigInt



// Important:

let usermail = []
let userDetial = {}


if(usermail.length === 0){
    console.log("Array is Empty")
}

if(Object.keys(userDetial).length === 0){
    console.log("Object is Empty")
}