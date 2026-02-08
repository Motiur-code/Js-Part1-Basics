let score = "33acb";

// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// "33"    => 33
// "33abc" => NaN
// true    => 1
// false   => 0

let isLoggedIn = "Motiur";

let booleanmIsloggedIn = Boolean(isLoggedIn);
// console.log(booleanmIsloggedIn);

// 1  => true
// 0  => false
// "" => false
// "Motiur" => true

let someNumber = 33;

let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);


// ******** Opeartions or operators ********


let value = 3;
let negValue = -value;
// console.log(negValue);


// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 ** 3);
// console.log(2 / 3 );
// console.log(2 % 3 );

let str1 = "hello"
let str2 = " motiur"

let str3 = str1 + str2
console.log(str3);


// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");


// console.log(true);
// console.log(+true);
// console.log(+"");


let num1 , num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++;
++gameCounter;
console.log(gameCounter);


// link to study
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"