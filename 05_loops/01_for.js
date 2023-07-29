// for Loops:

for(let i = 1; i <= 10; i++){
    console.log(i)
}
// For Loop.


for(let i = 1; i <= 10; i++){
    for(let j = 1; j <= 10; j++){
        console.log(`${i} * ${j} = ${i*j}`)
    }
    console.log('\n')
}
// Nested For Loop.



// Loops with break and continue:

for(let i = 1; i <= 10; i++){
    if(i == 5) break
    console.log(i)
}

console.log('\n')

for(let i = 1; i <= 10; i++){
    if(i == 5) continue
    console.log(i)
}