/* Challenge 5: Ones and Zeros

Write a function `stringy` that takes a size and returns a string of alternating '1s' and '0s'.

The string should start with a 1.

```js
stringy(6) // --> '101010'
stringy(5) // --> '10101'
```

The size will always be positive and will only use whole numbers.
*/

function stringy (size) {
    var newString = "";
    for (i = 0; i < size; i++) {
        if (i % 2 === 0) {
            newString += "1";
        } else {
            newString += "0";
        }
    }
    return newString;
}

var num = 6;
var retrunString = stringy(num);
console.log(retrunString);
