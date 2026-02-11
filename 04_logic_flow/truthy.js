// suppose we have to query to database

const userEmail = -0

if (userEmail) {
  console.log("Got user email");


} else{
  console.log("Dont get user email");
  
  // for check array is empty or not
}if (userEmail.length === 0){
  console.log("empty array");
}

//for checking object is empty or not
const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empety");
}


// Nullish Coalescing Operators (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ? 10 ? 20
console.log(val1);




// Ternary  Operators
// condition ? true : false

const iceTeaPrice = 100 
iceTeaPrice <= 80 ? console.log("less than 80"): console.log("more than 80");


// Falsy Value
// false,  0,  -0,  BigInt 0n,  "",   null,  undefined,   NaN

// Truthy value
// "0",   'fasle',   " ",  {},  function(){},      


// in console  window 
// false == 0    => true
// false == ''   => true
// 0 == ''       => true