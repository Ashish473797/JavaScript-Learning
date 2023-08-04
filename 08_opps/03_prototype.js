// Define Method in Prototype of Object i.e we can use this method to all datatype:

Object.prototype.Ashish = function () {
  console.log("Hii, I am Ashish");
};

let age = 25;

let name = "Ashish";

let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",
  getSpiderPower: function () {
    console.log(`Spider power is ${this.spiderman}`);
  },
};

age.Ashish();
name.Ashish();
myHeros.Ashish();
heroPower.Ashish();

// Inheritance (Prototyple Inheritance):

const person = {
    name: "Ashish Kumar Gupta",
    age: 25,
    address: "Varanasi"
}

const employee = {
    __proto__:person,  // old syntax to inherit the parent object
    emplyeeId: 102,
    position: "Software Developer"
}

const student = {
    rollNo: "21MCA3030",
    course: "MCA",
    collageName: "Chandigarh University"
}

student.__proto__ = person // inherit the parent object from outside of the child object

const teacher = {
    subject: "maths",
    Qulification: "bsc"
}

Object.setPrototypeOf(teacher, person) // Moder syntax to inherit the parent object.

console.log(employee.name);
console.log(student.age);
console.log(teacher.address);