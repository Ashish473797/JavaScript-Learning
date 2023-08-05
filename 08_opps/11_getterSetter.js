class User {
  constructor(name, gmail, password) {
    this.name = name;
    this.gmail = gmail;
    this.password = password;
  }

  get password() {
    return this._password.toUpperCase()
  }

  set password(password) {
    this._password = password
  }
}
// Name of the setter and getter should be same as the variable name and get, set used together

const userOne = new User("Ashish", "ashish@abc.com", "aaa8976")

console.log(userOne.password);