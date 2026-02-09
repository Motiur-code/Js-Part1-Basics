// singleton
// Object.create // constructor
// [] =>square bricket


// object literals
const mySym = Symbol("key1"); // interview symbol key

const JsUser = {
  name: "Motiur",
  "full namae": "Motiur Rahman",
  [mySym]: "mykey1", // interview symbol key
  age: 21,
  location: "bengaluru",
  email: "Motiur@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Tuesday"],
};
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full namae"]);
// console.log(JsUser[mySym]);  //interview symbol key

// value changing
JsUser.email = "Motiur@chatgpt.com";
// Object.freeze(JsUser);
// console.log(JsUser);



JsUser.greeting = function () {
  console.log("hello Js uesr");
}  

JsUser.greetingTwo = function () {
  console.log(`hello Js uesr, ${this.name}`);
};

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
