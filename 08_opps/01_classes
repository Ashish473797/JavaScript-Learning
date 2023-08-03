const obj = {
    name: "Ashish",
    age: 24,
    varified: true,
    logNameAge: function () {
        console.log(this, '\n');
        console.log(`Name is ${this.name} and age is ${this.age}`);
        // this keyword denotes the current context.
    },
    updated: function(name = this.name, age = this.age, varified = this.varified){
        this.name = name
        this.age = age
        this.varified = varified
        return this
        // this is also used to reduce the name conflict.
    }
}
// object literal.


const date = new Date()
const num = new Number()
// Creating new Object by calling Constructor Function using new Keyword.
