// Stack =>Primitive (he gives copy of variable)
//  Heap =>Non-Primitive (he gives refrence original value)

 let myYoutubename = "motiurrahmandotcom"

 let anothername = myYoutubename
 anothername = "anasvlog"

//  console.log(myYoutubename);
//  console.log(anothername);
 
let userOne = {
  email: "user@google.com",
  upi: "user!axl"
}

let userTwo = userOne

userTwo.email = "Motiur@google.com"

console.log(userOne.email);
console.log(userTwo.email);
