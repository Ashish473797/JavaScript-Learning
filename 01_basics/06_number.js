// Number can be defined as primitive or constructor:

let score = 1000
// It is primitive definition

let balance = new Number(100000)
// It is instance of the Number wrap by the Number object.



// Methods of the Number:

let demoNum1 = 33.123
let demoNum2 = 33.99
console.log(`toString       : ${score.toString()}`)
console.log(`toFixed        : ${balance.toFixed(2)}`)
console.log(`toPrecision    : ${demoNum1.toPrecision(4)}`)
console.log(`toPrecision    : ${demoNum2.toPrecision(2)}`)
console.log(`toLocalString  : ${balance.toLocaleString("en-In")}`)
// these are some Methods of Number.



// Math library:
// Properties and Methods of Math library:

console.log(`PI     : ${Math.PI.toFixed(2)}`)
console.log(`SQRT2  : ${Math.SQRT2.toFixed(2)}`)
console.log(`LOG2E  : ${Math.LOG2E.toFixed(2)}`)
// these are some properties of Math library.

console.log(`abs    : ${Math.abs(-1)}`)
console.log(`round  : ${Math.round(4.3)}`)
console.log(`round  : ${Math.round(4.9)}`)
console.log(`ceil   : ${Math.ceil(4.3)}`)
console.log(`floor  : ${Math.floor(4.8)}`)
console.log(`min    : ${Math.min(4, 1, 5, 6)}`)
console.log(`max    : ${Math.max(4, 1, 5, 6)}`)
console.log(`random : ${Math.random().toFixed(2)}`)
console.log(`random : ${Math.floor((Math.random() * 10)) + 1}`)
// these are some Methods of Math library.



// Formula to Generate Random Number Under Range.

let min = 1
let max = 6

console.log(Math.floor(Math.random() * (max - min + 1)) + min)