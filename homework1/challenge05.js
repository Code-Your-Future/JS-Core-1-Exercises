'use strict';
console.log("it works");
function equals(got, expected) {
  if(got === expected) {
    console.log("✔︎ Passed");
    console.log();
  } else {
    console.log("𝙭 Failed");
    console.log("    Expected: " + expected);
    console.log("    But got:  " + got);
    console.log();
  }
}

/* Challenge 5: Ones and Zeros
Write a function `stringy` that takes a size and returns a string of alternating '1s' and '0s'.
The string should start with a 1.
```js
stringy(6) // --> '101010'
stringy(5) // --> '10101'
```
The size will always be positive and will only use whole numbers.
*/
var number = 5;

function stringy(number) {
    var string = " ";
        for (var i = 0; i < number.length; i++) {
            if (i % 2 === 0) {
                string += "1";
            } else if (i % 2 !== 0) {
                string += "0";
            }
        }
    return string;
}

console.log(stringy(number));

var bigNumber = 6;
console.log(stringy(bigNumber));

function stringy(number) {
    var result = "";
    for (var i = 0; i < number; i++) {
        if (i % 2 === 0) {
            result += "1";
        }
        else if (i % 2 !== 0) {
            result += "0";
        }
    }
    return result;
}

// do something
var newNumbers = 5;
var numbers = 6;
var numberTen = 10;
console.log(stringy(newNumbers));
console.log(stringy(numbers));
console.log(stringy(numberTen));

// equals(stringy(5), "10101");
// equals(stringy(6), "101010");
// equals(stringy(10), "1010101010");

