
/* Challenge 5: Ones and Zeros

Write a function `stringy` 
that takes a size and returns a string of alternating '1s' and '0s'.

The string should start with a 1.
```js
stringy(6) // --> '101010'
stringy(5) // --> '10101'
```
The size will always be positive and will only use whole numbers.
*/

    function stringy (size) {
        // if (size <=1) {return console.log("Enter positive whole numbers ");}
        var newString=" ";
        for (i=1; i<= size; i++) {
             if (i % 2 !== 0) {
                 newString = newString + "1";
             }
            else { 
                newString = newString +"0";
            }
        }
       console.log(newString);
    }
    stringy(7);