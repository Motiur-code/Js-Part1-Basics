// Primitive or 
// String , Number , Boolean , null , undefined , symbol , BigInt
 
// Js is Dynamic Typed language
const score = 100;
const scoreValue = 100.4;

const  isLoggedIn = true;
const outsideTemp = null;
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

// const bigNumber = 3445675948590n


// Reference (Non primitive) typesof = Function object
// Array , Objects(key value pair) , Functions

const heros = ["shaktiman" , "naagraj", "doga"]

let myObj = {
  name: "Motiur",
  age : 22,
}

const myFunction = function (){
     console.log("Hello Wolrd"); 
}

console.log(typeof bigNumber); //undefined
console.log(typeof outsideTemp); //object
console.log(typeof outsideTemp); //object
console.log(typeof scoreValue); //number


// 