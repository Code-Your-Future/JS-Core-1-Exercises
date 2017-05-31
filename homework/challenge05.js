/* Challenge 5: Ones and Zeros

Write a function `stringy` that takes a size and returns a string of alternating '1s' and '0s'.

The string should start with a 1.

```js
stringy(6) // --> '101010'
stringy(5) // --> '10101'
```

The size will always be positive and will only use whole numbers.
*/

function stringy(num) {
    tempString = "";
    for (i = 0; i < num; i++){
        if (i % 2 === 0) {
            tempString += "1";
        } else {
            tempString += "0";
        }
    }
    return tempString;
}

console.log(stringy(6))