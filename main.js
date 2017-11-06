/*
  We will use this file to add the Code that you will learn in JS-Core Class 1
  Update this file, then run it from the console using the command:

      node class-exercises.js
*/

console.log(typeof 'Hello World'); //The output should be string
console.log(typeof false); // The output should be boolean
for(i = 0; i <= 10; i++) {
  console.log(i);
}

var city = 'London';
console.log('I live in ' + city);

var number = 9;
var isEven = number % 2 === 0;

if(!isEven) {
  console.log('odd');
}else {
  console.log('even');
}

// printing every second number till 100

for(i = 1; i <= 100; i++) {
  if(i%2 === 0) {
    console.log(i);
  }
}

// numbers between 1 and 100 divisible by 5
for(i=1; i<=100; i++) {
  if(i%5 === 0) {
    console.log(i);
  }
}

// sum of all number between 1 and 100

console.log('sum of numbers between 1 to 100');
var sum = 0;
for(i=1; i<=100; i++) { 
  sum+=i;
}
console.log(sum);


// Multiply function

function multiply(x, y) {
  console.log( x*y);
}

multiply(2, 4);

function addNumBetween(x, y) {
  var sum = 0;
  for(i=x; i<=y; i++) {
    sum+=i;
  }
  console.log(sum);
}
addNumBetween(1, 3);