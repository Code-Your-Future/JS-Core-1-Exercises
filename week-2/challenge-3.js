/**
Flatten and sort list of lists

Write a function to make myArray flatten and sorted.

Desired Output;

[1, 2, 5, 7, 8, 9, 12, 15, 20, 30, 50, 72, 81]

*/

var myArray = [
  [ 1, 2, 5, 7],
  [ 8, 9, 12, 15],
  [ 20, 30, 50, 72, 81]
];
function flatSort(array) {
	var newArray = [];
	for(var i = 0; i < array.length; i++) {
		for(var j = 0; j < array[i].length; j++) {
			newArray.push(array[i][j]);
		}
	}
	newArray.sort(function(a, b){
		return a - b;
	});
	console.log(newArray);
}
function secondFlatSort(array) {	
}
flatSort(myArray);


