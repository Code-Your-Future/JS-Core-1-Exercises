/*
  We will use this file to add the Code that you will learn in JS-Core Class 1
  Update this file, then run it from the console using the command:

      node class-exercises.js
*/

var myName = "Bridget";
console.log('Hello World ' + typeof myName);

var skyIsBlue = false;
console.log(typeof skyIsBlue);

if (!skyIsBlue === true) {
  console.log("Sky is blue!");
} else {
  console.log("Sky is not blue!");
}

var myName = "Bree";
var time = 0;

 if (time < 12) {
   console.log('Good morning ' + myName);
 } else if (time >= 12 && time <= 17) {
   console.log('Good afternoon ' + myName);
} else {
  console.log('Have a good night! ' + myName);
}

console.log('Bree');
console.log('Ray');
console.log('Flav');
console.log(6 * 9);

for (; time <= 12; time++) {
  console.log(myName + " " + time);
}

for (number = 0; number < 11; number++) {
  console.log("Number is: " + number);
}

for (i = 0; i <= 100; i = i + 2) {
  console.log(i);
}
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

for (var i = 0; i < writers.length; i++) {
  if (writers[i].alive === true) {
    console.log("Hi, my name is " + writers[i].firstName + " " + writers[i].lastName + ".  I am " + writers[i].age + "years old, and work as a " + writers[i].occupation + ".");
  }
}


for (var i = 0; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0){
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  }
  // if (i % 3 === 0) {
  //    console.log("Fizz");
  // } else if (i % 5 === 0) {
  //   console.log("Buzz");
  // }
}


var junk = ['hay', 'rabbit', 'needle', 'hat'];
function findNeedle(haystack) {
for (var i = 0; i <= 4; i++) {
  if (haystack[i] === "needle") {
    console.log("Found the needle at position " + i);
   } 
  }
}
findNeedle(junk);




var myVowels = ['a', 'e', 'i', 'o', 'u'];
function shortcut(myWords) {
  var answer = [];
  for(var i = 0; i < myWords.length; i++) {
    var currentLetter = myWords[i];
    if (myVowels.indexOf(currentLetter) === -1) {
      answer.push(currentLetter);
    }
  }
  return answer.join('');
}

var result = shortcut("goodbye my dear friend");
console.log(result);


function stringy(size) {
  var answer = [];
  for(var i = 1; i <= size; i++) {
    if ( i % 2 === 0 ) {
      answer.push(0);
    } else {
      answer.push(1);
    }
  }
  return answer.join('');
}

var result = stringy(6);
console.log(result);


var vowels = ['a', 'e', 'i', 'o', 'u'];
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'z'];
function removeVowels(myWords) {
  var answer = [];
  for(var i = 0; i < myWords.length; i++) {
    var currentLetter = myWords[i];
    if (vowels.indexOf(currentLetter) === -1) {
      answer.push(currentLetter);
    }
  }
  return answer.join('');
}

var result = removeVowels(alphabet);
console.log(result);


