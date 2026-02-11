// Immediately Invoked Function Expressions (IFFE) 
// global scope se problem hoti hai kayi baar jo vi us global variable ke varaible decaalre hai usko problem ko hatane ke liye IFFE la use karte hai
(function chai  () {
  // named IFFE
    
  console.log(`DB CONNECTED`);

})();

(  (name) =>  {
  //unnamed IFFE
  console.log(`DB CONNECTED TWO ${name}`);
}) ('Motiur')

// if we are  2 IFFE definetly we have tp  use ;
