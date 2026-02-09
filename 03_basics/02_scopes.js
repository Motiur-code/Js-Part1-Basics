//block scope means inside block 
// var c = 300
let a = 300
if(true) {
  let a = 10;
  const b = 20;
  // console.log("INNER:", a);
  function addnum(){

  }
  
}

// console.log(a); 
// console.log(b); 
// console.log(c);


function one(){
  const username = "Motiur"

  function two (){
    const website = "youtube"
    console.log(username);
    
  }
  // console.log(website);

  // two()
  
}
one()

if(true){
  const username = "Motiur"
  if (username === "Motiur"){
    const website = " youtube"
    // console.log(username + website);
    
  }
  // console.log(website); // donot access 
}
// console.log(username); //donot access



// ********* interesting ************


// access bcos we only decelare variable  not hold the variable
console.log(addone(5))
function addone(num){
  return num + 1
}



// Cannot access addTwo before initialization(Hoisting)
addTwo(5)
const addTwo = function(num){  // here we decelare variable and also hold 
  return num + 2
}
