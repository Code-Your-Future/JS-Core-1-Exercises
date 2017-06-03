/* Challenge 5: Ones and Zeros

Write a function `stringy` that takes a size and returns a string of alternating '1s' and '0s'.

The string should start with a 1.

```js
stringy(6) // --> '101010'
stringy(5) // --> '10101'
```

The size will always be positive and will only use whole numbers.
*/

function stringy (size) {
        var newSize=" ";
        if (size>0) {
        for (i=1; i<= size; i++) {
             if (i % 2 !== 0) {
                 newSize = newSize + "1";
             }
            else { 
                newSize = newSize +"0";
            }
        }
        
     console.log(newSize);
    } else{
        cnsole.log("The size will always be positive and will only use whole numbers.");
    }
}
    stringy(5);