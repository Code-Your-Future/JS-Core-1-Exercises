/* Challenge 5: Ones and Zeros

Write a function `stringy` that takes a size and returns a string of alternating '1s' and '0s'.

The string should start with a 1.

```js
stringy(6) // --> '101010'
stringy(5) // --> '10101'
```

The size will always be positive and will only use whole numbers.
*/

function stringy(limit) {
  var resultCharacters = [];
  for(var i = 1; i <= limit; i++) {
    if ( i % 2 === 0 ) {
      resultCharacters.push('0');
    } else {
      resultCharacters.push('1');
    }
  }
  console.log(resultCharacters.join(''));
}

stringy(6);
stringy(5);

//console.log(result);