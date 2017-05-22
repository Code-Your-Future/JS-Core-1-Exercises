/* Challenge 5: Ones and Zeros

Write a function `stringy` that takes a size and returns a string of alternating '1s' and '0s'.

The string should start with a 1.

```js
stringy(6) // --> '101010'
stringy(5) // --> '10101'
```

The size will always be positive and will only use whole numbers.
*/
var warn = "Please enter postive number without floating point"
var result = 0;
function stringy(size) {
    if (size > 0 && size != "" && size % 1 === 0) {
        result = (size >>> 0).toString(2);
        console.log(result);
    }
    else {
        console.log(warn);
    }
}

stringy(3.5);