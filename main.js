/*
  We will use this file to add the Code that you will learn in JS-Core Class 1
  Update this file, then run it from the console using the command:

      node class-exercises.js
*/

console.log('Hello World');
console.log('I just started learning JavaScript!');
console.log(1+5);



// odd numbers
var num = 12059;


if (num % 2 === 0) {
	// console.log("num is even");
	if (num > 0) {
		console.log("num is even and positive");
	} else if (num === 0) {
		console.log("num is zero");
	} else {
		console.log("num is even and negative");
	}
} else {
	// console.log("num is odd");
	if (num > 0) {
		console.log("num is odd and positive");
	} else {
		console.log("num is odd and negative");
	}
}

console.log("===========for loop exercise================");
for (var i=2; i <= 100; i+=2) {
  console.log(i);
}


console.log("===========for loop exercise divisible by 5================");
for (var i=0; i <= 100; i+=5) {
	console.log(i);
}

console.log("===========for loop exercise divisible by 5 ver. 2================");
for (var i=1; i <= 100; i++) {
	if (i % 5 === 0) {
		console.log(i);
	}
}

console.log("============For loop that prints out the sum of all the numbers between 1 and 100================");
var sum = 0;
for (var i = 1; i <= 100; i++) {
	sum = sum + i;
}
console.log(sum);


console.log("===========Multiply function================");
function multiply(x, y) {
	console.log(x * y);
}
multiply(20, 100);



console.log("===========Multiply function with limits================");
function addBetween(x, y) {
	var sum = 0;
	for (var i = x; i <= y; i++) {
		sum = sum + i;
	}
	console.log(sum);
}

addBetween(1, 3); 