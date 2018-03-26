/**
Flatten and sort list of lists

Write a function to make myArray flatten and sorted.

Desired Output;

[1, 2, 5, 7, 8, 9, 12, 15, 20, 30, 50, 72, 81]

*/

var myArray = [[1, 2, 5, 7], [8, 9, 12, 15], [20, 30, 50, 72, 81]];

function fixArray(array) {
  var cash = [];
  j = 0;
  for (i = 0; i < array.length; i++) {
    for (k = 0; k < array[i].length; k++) {
      cash[j] = array[i][k];
      j++;
    }
  }
  return cash;
}
console.log(
  fixArray(myArray).sort(function(a, b) {
    return a - b;
  })
);
