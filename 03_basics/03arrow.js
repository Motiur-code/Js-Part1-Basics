// this => current context
// suppose you register a user on a website
const user = {
  username: "Motiur",
  price: 599,

  welcomeMessage: function () {
    console.log(`${this.username}, welcome  to website`);
    console.log(this);
    
    
  }
}
// user.welcomeMessage()
// user.username = "Harshit"
// user.welcomeMessage()
// console.log(this);  //when we are in node enviroment this is refer to empty object




// function chai () {
//   let username = "Motiur"
//   console.log(this.username);
  
// }
// chai()




// Arrow Function
const chai =  () => {
   let username = "Motiur"
  console.log(this.username);
}
// chai()



// Arrow function    (if we use curly braces then we have to right return keyword
const addTwo = (num1 , num2) => {
  return num1 + num2
// }
// console.log(addTwo(3 ,4))




// Implicit retunr
//  const addTwo = (num1 , num2) =>  num1 + num2  //if we right parenthesis then we have not to right return function 
//  console.log(addTwo(3 ,4))


//  in React we use this concept
//  const addTwo = (num1, num2) => (num1 + num2)
//  console.log(addTwo(3, 4));



 const addTwo = (num1, num2) => ({username: "Motiur"})
 console.log(addTwo(3, 4));   

}
