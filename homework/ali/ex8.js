// Write a function which takes a integer number as a guess. It then checks if their guess matches 
// with a randomly generated integer number (Hint: try Math.random()).
//  If it does match it logs out with a success message (e.g. "Good guess!").
//  If their guess does not match, log a different message (e.g. "Incorrect, try again!").

function int0to10(int) {
	var random = Math.floor(Math.random() * 11);
	console.log(random);
	if (random === int) {
		console.log("Good guess!!");
	} else {
		console.log("Incorrect, try again!");
	}
}

int0to10(10);

