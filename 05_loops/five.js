// Most of time we for Each loop
// forEach()
// A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
//Perform the specified action for each element in an array


// forEach()
const coding = ["js", "rb", "java", "python", "cpp"]

// coding.forEach( function greet (val){
//     console.log(val);   
// })


// Arrow in forEach
coding.forEach((val) => {
  // console.log(val);  
})




function printMe (item){
  // console.log(item);
}
coding.forEach(printMe)



coding.forEach((item, index, arr)=>{
  // console.log(item, index, arr);
})




// Array in Object (very common opeartion in db)

const myCoding = [
  {
    languagename: "javascript",
    languageFileName: "js",
  },

  {
    languagename: "java",
    languageFileName: "java",
  },

  {
    languagename: "python",
    languageFileName: "py",
  },

  {
    languagename: "C++",
    languageFileName: "cpp",
  },
];

myCoding.forEach( (item)=>{
  console.log(item.languagename);
  

})







