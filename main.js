/*
  We will use this file to add the Code that you will learn in JS-Core Class 1
  Update this file, then run it from the console using the command:

      node class-exercises.js
*/

// console.log('Hello World');

xy();

function xy() {
    for (var i = 0; i < 3; i++) {
        // console.log("====/\====");
    }
}
xy();
//Write a for loop that loops over the numbers from 1 to 100, printing only every second number. 
//So it should return 2, 4, 6, 8, 10....


for (var i = 2; i <= 100; i += 2) {
    // console.log(i);
}

xy();
//Write a for loop that prints out all the numbers between 1 and 100 divisble by 5.

//See if you can think or more than one way to solve this.

for (var i = 1; i < 100; i++) {
    if (i % 5 == 0) {
        // console.log(i);
    }
}

xy();
//Write a for loop that prints out the sum of all the numbers between 1 and 100.
var sum = 0;
for (var x = 1; x <= 100; x++) {
    sum = sum + x;
}
// console.log(sum);

var inRange = function(x, y, z) {
    if (arguments.length !== 3) {
        throw new Error("Error : You need to pass three argumnets");
    } else {

        if (x > Math.min(y, z) && x < Math.max(y, z)) {
            console.log(x + " is in range");
        } else {
            console.log(x + " is not in a range");
        }
    }
}
inRange(2, 4, 3);