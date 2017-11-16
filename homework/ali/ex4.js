// Write a function which takes a city name and checks whether it is one of the Code Your Future cities 
// (London, Glasgow, Manchester). 
// If it is one of the CYF cities, log a success message (e.g. "Well done!"),
//  if it is not log a different message (.e.g "Not a CYF city, try again!").


function CYFcity(city) {
	if (city === 'London' || city === 'Manchester' || city === 'Glasgow') {
		console.log ('Well done!'); 
	} else { 
		console.log ('Not a CYF city, try again!');
	}
}

CYFcity('London');
CYFcity('Berlin');

