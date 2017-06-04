/* Challenge 5: Ones and Zeros

Write a function `stringy` that takes a size and returns a string of alternating '1s' and '0s'.

The string should start with a 1.

```js
stringy(6) // --> '101010'
stringy(5) // --> '10101'
```

The size will always be positive and will only use whole numbers.
*/

var alter_fact = true;
var warn = "Please enter postive number without floating point"
var result = "";
function stringy(size) {
    if (size > 0 && size != "" && size % 1 === 0) {
        for (var i = 1; i <= size; i++) {
            if (alter_fact) {
                result += "1";
                alter_fact = false;
            }
            else if (!alter_fact) {
                result += "0";
                alter_fact = true;
            }
        }
        console.log(result);
    }
    else {
        console.log(warn);
    }
}

stringy(6);