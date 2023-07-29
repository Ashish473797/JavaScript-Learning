// String can be defined as primitive or constructor:

let nickName = "ashu-kumar-gupta"
// It is primitive definition.

let homeName = new String("  Ashish Kumar Gupta   ")
// It is instance of the String wrap by the string object.

let age = 24
console.log(`My name is ${homeName} and nick name is ${nickName} age ${age}`)
// Modern syntax of concatenation i.e called String Interpolation.



// Properties and Methods of String:

console.log(nickName.length)
// It is the property of the string.

console.log(nickName[0])
console.log(nickName[1])
console.log(nickName[2])
console.log(nickName[3])
// It is the property of the String.

console.log(`toUpperCase: ${nickName.toUpperCase()}`)
console.log(`charAt     : ${nickName.charAt(3)}`)
console.log(`indexOf    : ${nickName.indexOf('u')}`)
console.log(`substring  : ${nickName.substring(0, 3)}`)
console.log(`slice      : ${nickName.slice(0, 1)}`)
console.log(`split      : ${nickName.split('-')}`)
console.log(`trime      : ${homeName.trim()}`)
console.log(`replace    : ${nickName.replaceAll('-', ' ')}`)
console.log(`includes   : ${nickName.includes("ashu")}`)
// these are some Methods of the String.