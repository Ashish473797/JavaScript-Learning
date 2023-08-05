// Class:

class User {
    
    constructor(userName, email, password){
        this.userName = userName
        this.email = email
        this.password = password
        console.log("User constructor is called");
    }

    encryptPassword () {
        return `abc${this.password}def`
    }
}

let newUser = new User("Ashish", "ashish473797@gmail.com", "123456")

console.log(newUser.encryptPassword());

// Inheritance:

class Teacher extends User {
    constructor (userName, subject, qualification, password, email) {
        super(userName, email, password)
        this.subject = subject
        this. qualification = qualification
        console.log("Teacher constructor is called");
    }

    getQualification() {
        console.log(`Qualification is ${this.qualification}`);
    }
}

let teach = new Teacher("hitesh", "maths", "bsc", "000", "hitesh@1234.gmai.com")

teach.getQualification()

console.log(teach.encryptPassword())

console.log(newUser.encryptPassword())