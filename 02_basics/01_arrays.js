// array
// Js arrays are resizable and can contaian a mix of different data types

// Js arrays are not associative arrays and so array elements cannot be accessed using arbitary strings as indexes

// Js array-copy opeartions create shallow copies.(All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).

// A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made.

// More formally, two objects o1 and o2 are shallow copies if:

// They are not the same object (o1 !== o2).
// The properties of o1 and o2 have the same names in the same order.
// The values of their properties are equal.
// Their prototype chains are equal.

// A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made

const myArr = [0, 1, 2, 3, 4, 5];
const mtHeroes = ["Shaktim", "naagraj"];

const myArr2 = new Array(1, 2, 3, 4);

// console.log(myarr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()
// console.log(myArr);
// console.log( newArr);
// console.log(typeof newArr);



// **** slice , splice *********

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3); //original array not manipulate
console.log(myn1);
console.log("B ", myArr);

// const myn2 = myArr.splice(1, 3); original array manipualte
console.log("C ", myArr);
console.log(myn2);


// output 
// A[0, 1, 2, 3, 4, 5] 
// [(1, 2)];
// B[0, 1, 2, 3, 4, 5];
// C[0, 4, 5]
// [1, 2, 3];





