const name = "Motiur";
const repoCount = 50;

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Motiur-hc-com");

// console.log(gameName[0]);
// console.log(gameName.__Ptoto__);


// console.log(gameName.length);
// console.log(gameName.toLowerCase());
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));


const newString = gameName.substring(0 ,4)
// console.log(newString);


const anotherString = gameName.slice(-8 ,4 )
console.log(anotherString);



const newStringOne = "    Motiur    "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://google.com/motiur%20rahman"

console.log(url.replace('%20', '-'))


console.log(url.includes('motiur'))


console.log(gameName.split('-'));
