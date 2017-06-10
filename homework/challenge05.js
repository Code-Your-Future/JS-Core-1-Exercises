/* Challenge 5: Ones and Zeros

Write a function `stringy` that takes a size and returns a string of alternating '1s' and '0s'.

The string should start with a 1.

```js
stringy(6) // --> '101010'
stringy(5) // --> '10101'
```

The size will always be positive and will only use whole numbers.
*/

var stringy = function(size){
  var str = "";
  for(var x = 1; x <= size; x++){
    if(x % 2 !== 0){
      str = str + "1"
    } else {
      str = str + "0";
    }
  }
  console.log(str);
}
stringy(6);