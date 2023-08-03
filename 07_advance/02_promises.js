// Creating Promises:

const promiseOne = new Promise(function (resolve, reject) {
  // Do an async task.
  // Db calls, crypography, network.
  setTimeout(function () {
    console.log("asyn first is completed");
    resolve();
  }, 1000);
});

// Consuming Promises:

promiseOne.then(function () {
  console.log("promise first resolved");
});

// Alernatives:

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("asyn second is completed");
    resolve();
  }, 1000);
}).then(function () {
  console.log("promise second resolved");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve({ name: "Ashish Kumar Gupta", mail: "ashishgggg@gmail.com" });
  }, 1000);
});

promiseThree.then((user) => {
  console.log(user);
});

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "Ashish", password: "123456" });
    } else {
      reject("something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((myUserName) => {
    console.log(myUserName);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("It is always Run");
  });

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "Anamika", password: "123456" });
    } else {
      reject("something went wrong");
    }
  }, 1000);
});

async function consumePromiseFive(){
  try{
    const response = await promiseFive
    console.log(response);
  }catch(error){
    console.log(error);
  }
}

consumePromiseFive();

// Fetch data using Async await:

async function getAllUsers(){
  try {

    const respone = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await respone.json()
    console.log(data);

  } catch (error) {

    console.log("ERROR: ", error);

  }
}

getAllUsers();

// Fetching Data using .then .catch .finally:

fetch("https://api.github.com/users/hiteshchoudhary")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("error: ", error);
  });
