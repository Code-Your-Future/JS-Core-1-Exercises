/*
  We will use this file to add the Code that you will learn in JS-Core Class 1
  Update this file, then run it from the console using the command:

      node class-exercises.js
*/


// function add (x, y) {
//   var addition = x + y;
//   console.log(addition)
// }
// add(20, 40);


 

 
//  for (var i=1; i<=10; i++){
//   var modulo = i % 5;
//   if (modulo === 0){
//     console.log(i)
//   }
// }
//  function add (){
//   for (var i=1; i<=10; i++){
//     console.log(i);
//     }
//  }


function limits (x, y) {
  var sum = 0;
  for (var i=x; i<=y; i++){
    sum +=i;
  }
  console.log(x, y);
  return sum;
}
console.log(limits(1, 10));


// var x;
// x = "hello";
// x = 2+2;

// console.log(x);

// if (true==true) {
//     console.log(x);
// }
// else{
//   console.log(400/7*4);
// }
// console.log('Hello World');
// console.log(400/7*4);
// console.log(typeof'Hello World');