/* Challenge 5: Ones and Zeros

Write a function `stringy` that takes a size and returns a string of alternating '1s' and '0s'.

The string should start with a 1.

```js
stringy(6) // --> '101010'
stringy(5) // --> '10101'
```

The size will always be positive and will only use whole numbers.
*/


function stringy(num) {

    var myString = "";
	for (var i = 1; i <= num; i++) {
		if(i % 2 === 0) {
			myString += "0";
		} else {
			myString += "1";
		}
    }
    
    console.log(myString);

     /* othe way

    var b = num.toString(2);
    console.log(b);             */
		
}

  


stringy(6);
stringy(5);
stringy(7);
stringy(8);
stringy(9);
stringy(10);
stringy(11);
stringy(12);
stringy(122);
stringy(3);




