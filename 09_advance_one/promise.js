// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value

// const { use } = require("react");

// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
//  rejected: meaning that the operation failed.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

// fetch('https://something.com').then().catch().finally()

const promiseOne = new Promise(function (resolve, reject) {
  //DO an async task
  //DB calls,cryptography, network
  setTimeout(function () {
    console.log("Async task is complete");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise consumed");
});

// resolve reject
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Aysnc 2 resolved");
});

// dataconsumation and get value
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Motiur", emial: "motiur@.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "Motiur", password: "1234" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
    // chaning  of .then
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => console.log("The promise is either resolved or rejected"));

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "javascript", password: "123" });
    } else {
      reject("ERROR JS went wrong");
    }
  }, 1000);
});

async function consumepPromiseFive() {
  try {
    const respone = await promiseFive;
    console.log(respone);
  } catch (error) {
    console.log(error);
  }
}
consumepPromiseFive();

// async  function getAllUsers(){
//  try {
//    const respone = await fetch("https://jsonplaceholder.typicode.com/users");

//    const data =  await respone.json();
//    console.log(data);
//  } catch (error) {
//   console.log("E:", error);
//  }
// }

// getAllUsers()

fetch("https://api.github.com/users/hiteshchoudhary")
  .then((respone) => {
    return respone.json();
  })
  .then(() => {
    console.log(data);
  })
  .catch((error) => console.log(error));
