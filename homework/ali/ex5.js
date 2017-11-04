// Extend the function from Exercise 4 by copy/pasting it to a new function. 
// The new function should take an array of city names and checks if
//  all of them are CYF cities, some of them are CYF cities or none of them are CYF cities
//   (Hint: use a loop).

var cyfCities = ['London', 'Manchester', 'Glasgow'];

function checkCity(array) {
	var counter = 0;
	for (var i = 0; i < array.length; i++) {
	 for (var j = 0; j < cyfCities.length; j++) {
	 	if (array[i] === cyfCities[j]) {
	 		counter += 1;
	 	}
	 }
	} 
	if (counter === array.length) {
		console.log('All of the cities are CYF cities');
	} else if (counter > 0) {
		console.log('Some of the cities are CYF cities');
	} else {
		console.log ('None of them is a CYF city, try again!');
	}
}


checkCity(['London', 'Manchester', 'Glasgow']);
checkCity(['London', 'Paris', 'Berlin']);
checkCity(['Kiev', 'Berlin', 'Paris', 'Tallin']);

