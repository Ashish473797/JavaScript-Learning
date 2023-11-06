"use strict"                
// used for treat as js code as a newer version.

// primitive datatype are::

let name = "ashish"                 // string
let age  = 22                       // number
let phoneNo = 1234567891999         // bigInt 
let married = false                 // boolean
let speed;                          // undefine
let value = Symbol('hello')         // symbol
let empty = null                    // null

// Non primitive datatype are::

let student = { }                   // object
let studentArr = []                 // array object
let studentAction =  function(){}   // function object
let date = new Date("2022-03-25");  // date object


console.table([typeof name, typeof age, typeof phoneNo, typeof married, typeof speed, typeof value, typeof empty, typeof student, typeof studentArr, typeof date, typeof studentAction])

// Note:  primitive datatype take memory in Stack whereas Non-primitive datatype take memory in Head and referance stored in Stack.