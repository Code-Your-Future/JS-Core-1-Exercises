/* Challenge 5: Ones and Zeros

Write a function `stringy` that takes a size and returns a string of alternating '1s' and '0s'.

The string should start with a 1.

```js
stringy(6) // --> '101010'
stringy(5) // --> '10101'
```

The size will always be positive and will only use whole numbers.
*/

console.log('======================= CHALLENGE 05 ==============================');

function stringy(num) {
    var output = "";
    for (var i = 1; i <= num; i++) {
        if(i%2 === 0) {
            output = output + '0';
        }else {
            output = output + '1';
        }
    }
    console.log(output);
}
stringy(2);
stringy(5);
stringy(15);
stringy(55);