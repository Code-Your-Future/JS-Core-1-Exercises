// Extend the function from Exercise 5 by copy/pasting it to a new function.
//  The new function should handle UPPER and lower case city names in the input
//   (Hint: try .toLowerCase()).

var cyfCities = ['London', 'Manchester', 'Glasgow'];

function checkCity(array) {
	var counter = 0;
	for (var i = 0; i < array.length; i++) {
	 for (var j = 0; j < cyfCities.length; j++) {
	 	if (array[i].toLowerCase() === cyfCities[j].toLowerCase()) {
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


checkCity(['LoNdOn', 'MANCHESTER', 'GlasgoW']);
checkCity(['London', 'Paris', 'BERLIN']);
checkCity(['KIEV', 'Berlin', 'PaRIs', 'Tallin']);
