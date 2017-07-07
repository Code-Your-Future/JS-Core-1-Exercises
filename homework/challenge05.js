/* Challenge 5: Ones and Zeros

Write a function `stringy` that takes a size and returns a string of alternating '1s' and '0s'.

The string should start with a 1.

```js
stringy(6) // --> '101010'
stringy(5) // --> '10101'
```

The size will always be positive and will only use whole numbers.
*/


var warning = "Please Use Whole Numbers Only";
var result = "";
function stringy(Number) {
    if (Number > 0 && Number != "" && Number % 1 === 0) {
        for (var i = 1; i <= Number; i++) {
            if (i % 2 === 1) {
                result += "1";
            }
            else if (i % 2 === 0) {
                result += "0";
            }
            else if (i === 0) {
                result += 1
            }
        }
        return result;
    }
    else {
        return warning;
    }
}
console.log(stringy(0));



