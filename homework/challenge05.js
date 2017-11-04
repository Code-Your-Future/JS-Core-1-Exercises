/* Challenge 5: Ones and Zeros

Write a function `stringy` that takes a size and returns a string of alternating '1s' and '0s'.

The string should start with a 1.

```js
stringy(6) // --> '101010'
stringy(5) // --> '10101'
```

The size will always be positive and will only use whole numbers.
*/

function stringy(number) {
	var size = '';
	for (var i = 1; i <= number; i++) {
	if (i%2 === 0) {
		size = size + '0';
	} else {
		size = size + '1';
	}	
}
	return size;
}
console.log(stringy(15));
