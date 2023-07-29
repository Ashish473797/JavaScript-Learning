// Declaration and Initialization of Object:

let mySymbol = Symbol("keyOne")

let user = {}
// Litral Declaration.

user.name = "Ashish"
user.lastName = "Gupta"
user.email = "ashish473797@gmail.com"
user.age = 24
// Object Initialization.

console.log(user)

let obj = {
    name: "Ashish",
    "full name": "Ashish Kumar Gupta",
    [mySymbol]: "Symbol should be define in Square Bracker as a key in the object",
    age: 24,
    email: "ashish473797@gmail.com",
    myfun: function(){
        console.log(`${this.name}, Welcome to website.`)
    }
}
// Litral Declaration and initialization.

let newObj = Object.create({
    name: "Ashish",
    "full name": "Ashish Kumar Gupta",
    [mySymbol]: "Symbol should be define in Square Bracker as a key in the object",
    age: 24,
    email: "ashish473797@gmail.com"
})
// It is Singleton Declaration i.e Declaration by Constructor.

let newObjTwo = new Object({
    name: "Ashish",
    "full name": "Ashish Kumar Gupta",
    [mySymbol]: "Symbol should be define in Square Bracker as a key in the object",
    age: 24,
    eachName: {
        firstName: "Ashish",
        lastName: {
            middleName: "Kumar",
            lastN: "Gupta"
        }
    },
    email: "ashish473797@gmail.com"
})
// It is Singleton Declaration i.e Declaration by Constructor.



// Access and update of Data:

console.log(obj["full name"])   // Remember.
console.log(obj[mySymbol])      // Symbols can't be pass as a String. 
console.log(obj.name)           // . operator can not be access full name  // Most use.
obj.myfun()                     // accessing function.

obj.name = "Ashanu"
console.log(obj)

Object.freeze(obj)              // it will freeze the oject i.e it can not be update.   

obj.name = "Ashish Gupta"
console.log(obj)



// Adding functions to the object as a key:

newObj.greeting = function(){
    console.log(`Hello ${this.name}, How Are You!`)
}

console.log(newObj.greeting())   // greeting() means function calling.
console.log(newObj.greeting)     // greeting means referance.



// Joining Two Objects

let obj1 = {
    1: "one",
    2: "two"
}

let obj2 = {
    3: "three",
    4: "four"
}

let obj3 = Object.assign({}, obj1, obj2)   // we can also use ... i.e spread operator.
console.log(obj3)



// Important:

console.log(Object.keys(newObjTwo))

console.log(Object.values(newObjTwo))

console.log(Object.entries(newObjTwo))

console.log(newObjTwo.hasOwnProperty("name"))
// these are some litral and global methods of Object.



// Destructuring:

const course = {
    courseName: "C++",
    instroctor: "Ashish",
    price: "5000"
}

const {courseName: cn, instroctor: ins, price: pr} = course
// Now we can use cn, ins, pr alternatively to the respective keys.

console.log(cn, ins, pr)