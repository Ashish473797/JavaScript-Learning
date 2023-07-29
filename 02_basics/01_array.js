// Array Declaration and Initialization:

let arr = [1, 1.2, null, false, "Ashish"]
let symbolone = Symbol("keyOne")
let mixArr = [1, 2, [4, 5, 6], ["ashish, kumar, gupta"], { name: "Ashish", age: 24}, 3, symbolone, 4, 5]
// In JavaScript Array contain different type of data because it is an oject.
console.log(arr)
console.log(typeof arr[0])
console.log(typeof arr[1])
console.log(typeof arr[2])
console.log(typeof arr[3])
console.log(typeof arr[4])

let demoArr = [1, 2, 3, 4, 5]
let marvelHeros = ["Iron-Man", "Spider-Man", "Thor", "Black-Widow", "Ant-Man"]
let dcHeros = ["Super-Man", "Bat-Man", "Flash", "Aqua-Man", "Black-Adam"]

let newArr = new Array(5, 4, 3, 2, 1)



// Properties and Methods of the Array:

console.log(typeof arr[0])
console.log(typeof arr[1])
console.log(typeof arr[2])
console.log(typeof arr[3])
console.log(typeof arr[4])
// It is the Property of the Array.

console.log(demoArr.length)
// It is the Property of the Array.


demoArr.push(6)
console.log(demoArr)

demoArr.pop();
console.log(demoArr)

demoArr.unshift(10)
console.log(demoArr)

demoArr.shift();
console.log(demoArr)

console.log(demoArr.includes(0))

console.log(demoArr.indexOf(5))

let stringArr = demoArr.join()
console.log(`${'\n'}stingArr is ${stringArr} and type is ${typeof stringArr}`)

let conArr = marvelHeros.concat(dcHeros);
console.log('\n', conArr)

let allHeros = [ ...marvelHeros, ...dcHeros ] // Most use
console.log('\n', allHeros)

let usableArr = mixArr.flat(Infinity)
console.log('\n', usableArr)

console.log('\n', Array.isArray("Ashish"))

console.log('\n', Array.from("Ashish"))

console.log('\n', Array.from({ name: "ashu", age: 24 })) // remember

let a = 1
let b = 2
let c = 3

console.log('\n', Array.of(a, b, c))
// these are some Method of Array.



// Slice vs Splice:

let slice = demoArr.slice(1, 3)
console.log(`${'\n'}data in slice is ${slice}`)
console.log(`${'\n'}effect on array by slice ${demoArr}`)

let splice = demoArr.splice(1, 3)
console.log(`${'\n'}data in splice is ${splice}`)
console.log(`${'\n'}effect on array by splice ${demoArr}`)