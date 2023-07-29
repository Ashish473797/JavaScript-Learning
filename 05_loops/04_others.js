// forof Loops:

let object = [1, 2, 3, 4, 5]

for (const iterator of object) {
    console.log(iterator)
}


// Iterating on Map Object.

let map = new Map()

map.set(1, "jan")
map.set(2, "feb")
map.set(3, "mar")
map.set(4, "apr")
map.set(5, "may")

for (const key of map) {
    console.log(key)
}

for (const [key, value] of map) {
    console.log(`${key}: ${value}`)
}
console.log('\n')



// forIn Loops:

let objectTwo = [1, 2, 3, 4, 5]

for (const key in object) {
    console.log(key)
}


// Iterating on Object.

let myObject = {
    js: "javascript",
    cpp: "c++",
    py: "python",
    rb: "ruby",
    go: "golang"
}

for (const key in myObject) {
    console.log(`${key}: ${myObject[key]}`)
}