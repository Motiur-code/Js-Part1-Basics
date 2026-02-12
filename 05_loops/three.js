//Higher order function

// for of
// string in array
// ["", "",""]
// object in array
// [{}], [{}], [{}]
/*
for (const element of object) {
}
*/

const arr = [1, 2, 3, 4 , 5]

for (const num of arr) {
  // console.log(num);
}

const greetings = "Hello World"
for (const greet of greetings) {
  // console.log(`Each char is ${greet}`);
}


// Maps  konwn for unique value 
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
map.set("IN", "India"); // this will not print bcos this is not unique
// console.log(map);

// Map is iterable
for (const [key , value] of map) {
  console.log(key, ':-', value);

}

// Object is not iterable but Map is iterable
const myObject = {
  game1: 'NFS',
  game2: 'spiderman'
}

for (const [key, value] of myObject) {
  console.log(key, ':-', value);
  
}
