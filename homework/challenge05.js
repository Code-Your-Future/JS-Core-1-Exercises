/* Challenge 5: Ones and Zeros

Write a function `stringy` that takes a size and returns a string of alternating '1s' and '0s'.

The string should start with a 1.

```js
stringy(6) // --> '101010'
stringy(5) // --> '10101'
```

The size will always be positive and will only use whole numbers.
*/


function Stringy(number){
    var num = ""
  
    for (var i = 0; i < number; i++){
        if (num.slice(-1) === "1"){
            num = num.concat("0");
        }
        else{
            num = num.concat("1");
        }
    }
    return num;
  }
  console.log(Stringy(13));
  