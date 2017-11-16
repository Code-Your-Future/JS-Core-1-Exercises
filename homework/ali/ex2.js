// Write a function to log the grade of a student in an examination. 
// The student will get A+ grade if the mark is in the range 90 - 100 (inclusive),
//  A if the mark is in the range 80 - 89, B if the mark is in the range 70 - 79,
//   C if the mark is in the range 60 - 69, D if the mark is in the range 50 - 59 
//   and E if the mark is 49 or lower.

function grade (mark) {
	if (mark >= 90 && mark <= 100) {
		console.log('Your grade is A+');
	} else if (mark >= 80 && mark <= 89) {
		console.log('Your grade is A'); 
	} else if (mark >= 70 && mark <= 79) {
		console.log('Your grade is B'); 
	} else if (mark >= 60 && mark <= 69) {
		console.log('Your grade is C'); 
	} else if (mark >= 50 && mark <= 59) {
		console.log('Your grade is D'); 
	} else if (mark >= 0 && mark <= 49) {
		console.log('Your grade is E');
	} else {
		console.log('Sorry, can\'t count your grade');
	}
		}

grade(100);
grade(55);
grade(-8);