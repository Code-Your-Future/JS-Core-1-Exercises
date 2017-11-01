/*
  We will use this file to add the Code that you will learn in JS-Core Class 1
  Update this file, then run it from the console using the command:

      node class-exercises.js

var x=89;
if (x%2==0){
console.log("this is even number");
} else {
console.log("this is odd number");
}

var y=123;
if(y=>0){
console.log("positive");
}
else{
 console.log("negative") 
} 
for(var i=0; i<=100; i++){
 var u=i%5;
 if(u==0){
  console.log(i);
}
}

function multiply(y, x){
  return y*x;
}
console.log(multiply(7, 7));

function add(x, y){
  var sum=0;
  for(var i=x; i<=y; i++) {
    sum+=i;
  }   console.log(sum);
 
}
add(1, 34);
*/

/* Challenge 1: Famous Writers

Did you know you can also have an array of objects? We've created one for you here. Loop through the array, and for each object, `console.log()` out the sentence:

"Hi, my name is {firstName} {lastName}. I am {age} years old, and work as a {occupation}."

Here is the array:

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

for(var i=0;i<writers.length; i++){
console.log('Hi, my name is '+ writers[i].firstName +' '+ writers[i].lastName+'.' +' I am'+ writers[i].age+ ' years old, and work as a' + writers[i].occupation+'.');
}






