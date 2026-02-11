// if
// 2<=2  , 3!=2 , 2=="2", 2!=3, 
// <, >, <=, >=, ==, !=, ===, !==


/*
const isLoggedIn = true
const temperature = 41

if (temperature === 40) {
  console.log("less than 50"); 
} else {
  console.log("temeprature is greater than  50");
}
console.log("Execute always");
*/



// block scope
/*
const score = 200

if (score > 100) {
  let power = "fly"
  console.log(`user power: ${power}`);
}
console.log(`user power: ${power}`);
*/


// const balance  = 1000
// if (balance > 500) console.log("test"); //implicit scope

  

// Nesting
/*
const balance = 1000;
if (balance < 500) {
  console.log("less than 500");
} else if (balance < 750) {
  console.log("less than 750");
   
} else if (balance < 900) {
  console.log("less than 900");
} else {
  console.log("less than 1200");
}
*/

// Real life example
const userLoggedIn = true
const debitCard = true
const isLoggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {
  console.log("Allow to buy course && 2 == 2");
}
if (isLoggedInFromGoogle || loggedInFromEmail) {
  console.log("User logged in");
}
 


