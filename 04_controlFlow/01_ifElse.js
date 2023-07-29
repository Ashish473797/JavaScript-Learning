// Control-Flow Statements:

if(1){
    console.log("Hello IF")
}
// IF Statement.



if(1 == "1") console.log("First Code"), console.log("Second Code")
// Alternative of above code but Not recommended.



if (1 === 1) {
    console.log("Hello IF")
} else {
    console.log("Hello ELSE")
}
// IF-ELSE Statement.



if (true) {
    console.log("Hello IF")

} else if (true) {
    console.log("Hello ELSE IF")

} else {
    console.log("Hello ELSE")
}
// Nested IF-ELSE Statement.



// Ternary Operator:

let greater = 10 > 9 ? 10 : 9
// It work same as else-if but used for assign value to the variable.

console.log(greater)



// Nullish Coalescing Operator (??): null or undefined

let valueOne = 5 ?? 10
console.log("valueOne", valueOne)


let valueTwo = null ?? 15
console.log("valueTwo", valueTwo)


let valueThree = undefined ?? 20
console.log("valueThree", valueThree)


let valuefour = undefined ?? 25 ?? 20
console.log("valuefour", valuefour)
// It is used for assign a defaut value to the variable if data comming from outside is null or undefined.