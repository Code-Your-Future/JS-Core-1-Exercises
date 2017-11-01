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
	return myString;
		

}

console.log(stringy(5));
console.log(stringy(6));
console.log(stringy(7));
console.log(stringy(8));
console.log(stringy(9));
console.log(stringy(10));
console.log(stringy(11));
console.log(stringy(12));
console.log(stringy(1222324435));