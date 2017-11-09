// Extend the function from Exercise 8 by copy/pasting it to a new function.
//  The new function should now take an array of numbers as guesses, 
//  and tells the user if any of their guesses were correct.

function int0to20(intArray) {
	var random = Math.floor(Math.random() * 21);
	console.log(random);
	var count = 0;
	for (var i =0; i < intArray.length; i++) {
		if (random === intArray[i]) {
			count += 1;
	}
}
	if (count > 0) {
		console.log("Good guess!!");
	} else {
		console.log("Incorrect, try again!");
	}
}


int0to20([10,5,20,11]);



