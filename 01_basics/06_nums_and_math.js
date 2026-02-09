const score = 400

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); //use in gst calcualtion


const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));


const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));


// *********** Maths ***********


// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6)); //5
// console.log(Math.ceil(4.2));  //5
// console.log(Math.floor(4.9)); //4
// console.log(Math.min(4, 3 , 5 , 6 ,7 ,8)); 
// console.log(Math.max(4, 3 , 5 , 6 ,7 ,8)); 



console.log(Math.random()); // always gives  value in between 0 to 1
console.log((Math.random()*10) + 1); //this concept use in number guessing
console.log(Math.floor(Math.random() * 10) + 1);


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)

