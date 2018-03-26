/* Challenge 5: Ones and Zeros

Write a function `stringy` that takes a size and returns a string of alternating '1s' and '0s'.

The string should start with a 1.

```js
stringy(6) // --> '101010'
stringy(5) // --> '10101'
```

The size will always be positive and will only use whole numbers.
*/
function stringy(sum) {
  var cash = "";
  for (i = 1; i < sum + 1; i++) {
    if (i % 2 === 1) {
      cash = cash + "1";
    } else {
      cash = cash + "0";
    }
  }
  return cash;
}
console.log(stringy(4));
