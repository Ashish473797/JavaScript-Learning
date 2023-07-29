// Date object:

let date = new Date()
// Set Current Date and Time.

console.log(date)
console.log(date.toString())
console.log(date.toLocaleString())
console.log(date.getTime())

let myDate = new Date(2023, 0, 15, 5, 30)
// Set custom Date and time.

console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toLocaleString())
console.log(myDate.getTime())

let stringDate = new Date("01-07-2022")
// Set custom Date and time from String.

console.log(stringDate)
console.log(stringDate.toString())
console.log(stringDate.toLocaleString())
console.log(stringDate.getTime())



// TimeStamp:

let timeStamp = Date.now()
console.log(timeStamp)

console.log(Math.floor(timeStamp/1000))
// Convert time Stamp from milliseconds to seconds



// Reminder:

let newData = new Date()

newData.toLocaleString("en-In", {
    weekday:"long"
})

console.log(newData.toLocaleString("en-In", {
    weekday:"long"
}))