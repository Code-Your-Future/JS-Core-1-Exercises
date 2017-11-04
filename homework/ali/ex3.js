// Write a function which takes an integer number
//  and checks if it is within 20 digits of 100 or within 20 digits of 400.
function within(x) {
	if (x >= 80 && x <=120) {
		console.log ('The number is within 20 digits of 100');
	} else if (x >= 380 && x <= 420) {
		console.log ('The number is within 20 digits of 400');
	} else {
		console.log ('The number is not within 20 digits of 100 OR 400');
	}
	}
	within(99);
	within(401);
	within(-7);