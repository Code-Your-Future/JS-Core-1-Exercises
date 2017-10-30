/*
  We will use this file to add the Code that you will learn in JS-Core Class 1
  Update this file, then run it from the console using the command:

      node class-exercises.js
*/

//Console log Hello world 
// console.log('Hello World');
// console.log('I\'ve just started to learn Javascript');
// console.log(5343);
// console.log(typeof 55);
// console.log(typeof true);
// console.log(typeof 'Hello'); //comment

// var b;
// console.log(typeof b);

//console.log(1/0);


// IF ELSE STATEMENT 

var isHappy = false;
if (isHappy === true) {
  // if I am happy, print "Hello world!"
  console.log('Hello world!');
} else {
  // if I am sad, print a frowny face
  console.log(':(');
}


// EVEN ODD + -

// for (var i=1; i <=10; i++) {
// 	console.log(evenodd(i));
// }

// var number = -5;

// if ((number%2) === 0 && number>0) {
// 	console.log('positive even');
// } else if ((number%2) === 0 && number<0) {
// 	console.log('negative even');
// } else if ((number%2) === 1 && number>0) {
// 	console.log('positive odd');
// } else if (number === 0) {
// 	console.log ('Zero');
// } else {
// 	console.log('negative odd');
// }


//  LOOP


// for (var i=2; i <= 10; i+=2) {
//   console.log(i);
// }

// for (var i=5; i <= 100; i+=5) {
//   console.log(i);
// }

// for (var i=1; i <= 100; i++) {
// 	if (i%5 === 0) {
// 		console.log(i);
// 	}
// }


// LOOP SUM


// var sum = 0;
// for (var i=1; i<=100; i++) {
// 	sum = sum + i;
// }
// console.log(sum);



//FUNCTIONS 


function multiply (x, y) {
  return x*y;
}

console.log(multiply(2, 3));


function limits (x, y) {
	var sum = 0;
  	for (var i=x; i<=y; i++) {
		// sum += i;
		sum = sum + i;
	}
	return sum;
}

console.log(limits(1,10));


