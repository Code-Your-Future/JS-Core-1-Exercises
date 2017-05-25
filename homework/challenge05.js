/* Challenge 5: Ones and Zeros

Write a function `stringy` that takes a size and returns a string of alternating '1s' and '0s'.

The string should start with a 1.

```js
stringy(6) // --> '101010'
stringy(5) // --> '10101'
```

The size will always be positive and will only use whole numbers.
*/
var oneZero='';
function stringy (size) {
 for (i=1; i<= size; i++){
 if ((size === 1) || (size===0)){
 console.log(size());
} else if (i % 2 === 1){
    oneZero = "1" + oneZero 
 }
 else if (i % 2 === 0){
     oneZero = "0" + oneZero
 }
}
console.log(oneZero);
};

stringy (10);
