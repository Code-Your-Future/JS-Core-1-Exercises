/* Challenge 5: Ones and Zeros

Write a function `stringy` that takes a size and returns a string of alternating '1s' and '0s'.

The string should start with a 1.

```js
stringy(6) // --> '101010'
stringy(5) // --> '10101'
```

The size will always be positive and will only use whole numbers.
*/
function stringy(number) {
    var result = ''
    for (var i = 0; i < number; i++) {
        // console.log(i)
        if (i % 2 === 0) {
            result += '1'
        } else {
            result += '0'
        }
    }
    //console.log(result)
    return result
}

var result=stringy("6");
console.log(result)


