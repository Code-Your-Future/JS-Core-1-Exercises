/* Challenge 1: Famous Writers

Did you know you can also have an array of objects? We've created one for you here. Loop through the array, and for each object, `console.log()` out the sentence:

"Hi, my name is {firstName} {lastName}. I am {age} years old, and work as a {occupation}."

Here is the array: */

let   writers= [{ 
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

for(let i= 0; i<writers.length; i++){
  console.log('Hi, my names is '+ writers[i].firstName +''+ writers[i].lastName+ '.'+ 'i am '+ writers[i].age  + ' ' +'year old'+ 'i work as '+ writers[i].occupation +'.');
}
















/*

  or(var i=0;i<writers.length; i++){
    console.log('Hi, my name is '+ writers[i].firstName +' '+ writers[i].lastName+'.' +' I am'+ writers[i].age+ ' years old, and work as a' + writers[i].occupation+'.');
    }*/