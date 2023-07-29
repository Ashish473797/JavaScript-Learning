// forEach Loops:

let arr = [1, 2, 3, 4, 5]

arr.forEach((item) => {
    console.log(item)
})


arr.forEach((item, index, arr) => {
    console.log(item, index, arr)
})
console.log('\n')


// Important.

function addOne(item){
    item = item + 1
    console.log(item)
}

arr.forEach(addOne)


const objectArr = [
    {
        lang: "javascript",
        ext: "js"
    },
    {
        lang: "python",
        ext: "py"
    },
    {
        lang: "golang",
        ext: "go"
    },
    {
        lang: "ruby",
        ext: "rb"
    },
    {
        lang: "c++",
        ext: "cpp"
    }
]

objectArr.forEach( (item) => {
    console.log(item.lang)
} )