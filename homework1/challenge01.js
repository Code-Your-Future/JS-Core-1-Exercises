// /* Challenge 1: Famous Writers

// Did you know you can also have an array of objects? We've created one for you here. Loop through the array, and for each object, `console.log()` out the sentence:

"Hi, my name is {firstName} {lastName}. I am {age} years old, and work as a {occupation}."

//   {
//     firstName: "Zadie",
//     lastName: "Smith",
//     occupation: "writer",
//     age: 41,
//     alive: true
//   },
//   {
//     firstName: "bell",
//     lastName: "hooks",
//     occupation: "writer",
//     age: 64,
//     alive: true
//   },
// ];

// Here is the array:

// If you want an extra challenge, only `console.log()` the writers that are alive.
// */

// // console.log("Famous Writers");
// console.log(" Hi, my name is " + writers[0].firstName + " " + writers[0].lastName + ". I am " + writers[0].age 
// + " years old, and work as a " + writers[0].occupation + ".");

// for (i=0; i<writers.length; i++) {
//     if (writers[i].alive === true) {
//     console.log(" Hi, my name is " + writers[i].firstName + " " + writers[i].lastName + ". I am " + writers[i].age 
// + " years old, and work as a " + writers[i].occupation + ".");
//     }
// }


var writers = [
  {
    firstName: "Virginia",
    lastName: "Woolf",
    occupation: "writer",
    age: 59,
    alive: false
  },
  {
    firstName: "Zadie",
    lastName: "Smith",
    occupation: "writer",
    age: 41,
    alive: true
  },
  {
    firstName: "Jane",
    lastName: "Austen",
    occupation: "writer",
    age: 41,
    alive: false
  },
  {
    firstName: "bell",
    lastName: "hooks",
    occupation: "writer",
    age: 64,
    alive: true
  },
];

// This is for loop and printing only alive. 
for (i = 0; i < writers.length; i++) {
  if (writers[i].alive === true) {
    console.log(" Hi, my name is " + writers[i].firstName + " " + writers[i].lastName + ". I am " + writers[i].age
      + " years old, and work as a " + writers[i].occupation + ".");
  }
}
