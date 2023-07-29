let score = "33"
console.log(typeof(score), score)

let valueInNumber = Number(score)
console.log(typeof(valueInNumber), valueInNumber)
// "33"     -> type change to number and value is 33
// "33abc"  -> type change to number but value is NaN
// "Ashish" -> type change to number but value is NaN
// "null"   -> type change to number but value is 0
// "true"   -> type change to number but value is 1



let isLogedIn = 1
console.log(typeof(isLogedIn), isLogedIn)

let isLogedInBool = Boolean(isLogedIn)
console.log(typeof(isLogedInBool), isLogedInBool)
// 1        -> type change to boolean and value is true
// 0        -> type change to boolean and value is false
// ""       -> type change to boolean and value is false
// "abc"    -> type change to boolean and value is true



console.log("1" + 2 + 2)
console.log( 2 + 2 + "1")
// tricky operations but not recommended