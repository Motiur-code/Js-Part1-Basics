// const tinderUser = new Object()  //Singelton object 


const tinderUser = {}  //non Singelton object

tinderUser.id = "123abc"
tinderUser.name = "Harshit"
tinderUser.isLoggedIn = false

// console.log(tinderUser);



// object under object
const regularUser = {
  email: "some@gmail.com",
  fullname:{
    userfullname:{
      firstname: "Motiur",
      lastname:  "Rahman"
    }

  }
}
// console.log(regularUser.fullname?.userfullname.firstname);



// object.assign()
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2} //
// const obj3 =  Object.assign({}, obj1, obj2, obj3)


// spread (we use spred 90% of the time  and few of time assign())
const obj3 = {...obj1, ...obj2}
// console.log(obj3);




// when value came from database
// array of object
const users = [
  {
    id: 1,
    email: "M@gamil.com",
  },
  {
    id: 1,
    email: "M@gamil.com",
  },
  {
    id: 1,
    email: "M@gamil.com",
  },
];

users[1].email
console.log(tinderUser);


// console.log(Object.keys(tinderUser)); // most use
// console.log(Object.values(tinderUser)); 
// console.log(Object.entries(tinderUser)); 


// console.log(tinderUser.hasOwnProperty('isLoggedIn'));




//  Object Destructuring{}
const course = {
  cousename : "Javascipt",
  price: "599",
  courseInstrucator: "hitesh"
}
// course.courseInstrucator
const {courseInstrucator: instructor} = course

// console.log(courseInstrucator);
console.log(instructor);


// in react
// const navbar  = ({company}) => {

// }
// navbar(company = "motiur")


// Api json

// {
//   name: "Motiur",
//   coursename: "javascript",
//   price: "free"
// }


[
  {},
  {},
  {}
]
// randomuserme
// JSON formatter