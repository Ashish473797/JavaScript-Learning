// while and do-while Loops:

let i = 1
while (i <= 10) {
    console.log(i)
    i++
}
// While Loop.


i = 1
while (i <= 10) {
    let j = 1
    while (j <= 10) {
        console.log(`${i} * ${j} = ${i * j}`)
        j++
    }
    i++
    console.log('\n')
}
// Nested While Loop.


let score = 1
do {
    console.log(score)
    score++;
} while (score <= 10)
// Do-While Loop.



// Loop with break and continue:

i = 1
while (i <= 10) {
    if(i == 5) break
    console.log(i)
    i++
}

console.log('\n')

i = 1
while (i <= 10) {
    if(i == 5)
    {
        i++
        continue
    }
    console.log(i)
    i++
}