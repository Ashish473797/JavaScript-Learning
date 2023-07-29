// Normal Function vs Arrow Function:

function funOne(){
    console.log("funOne")
    console.log(this)
}
// Normal Function.

const funTwo = () => {
    console.log("funTwo")
    console.log(this)
}
// Arrow Function.

funOne()
funTwo()

// Note: this key work different in both cases and also work diffent in browser so, use carefully.



// Different Syntax:

const addOne = (value) => {
    return value+1
}
// explicit return using the return keyword.

const addTwo = (value) => (value+2)
// alternative of the above code which implicit return the result.

const addObj = (nm) => ({name: nm})
// returning object which implicit return the result.


console.log('\n', addOne(2))
console.log('\n', addTwo(2))
console.log('\n', addObj("Ashish"))