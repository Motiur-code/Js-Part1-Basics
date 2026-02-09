// 

let myDate = new Date ()
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);
// console.log(myDate.toLocaleDateString());

// let myCreatedDate = new Date(2023, 0 , 23, 5 , 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());



// for creating quiz or poll in js
let myTimeStamp = Date .now ()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Date.now()/1000);   //i want in sec but problem is this give me in decimal value i dont want this so we use  (Math.Floor)

// console.log(Math.floor(Date.now() / 1000));



let newDate  = new Date ()
console.log(newDate.getMonth() + 1);
console.log(newDate.getDate());
console.log(newDate.getDay());

//  `${newDate.getDay()} and the time`



// most use 
newDate.toLocaleString('default',{
  weekday: "long",
  timeZone: ""
})