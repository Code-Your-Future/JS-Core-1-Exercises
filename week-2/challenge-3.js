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

const combinedArr = (arr) => {
  var result = [];
  for (var i = 0; i <= arr.length -1; i++) {
   for (j = 0; j <= arr[i].length - 1; j++) {
     result.push(arr[i][j]);
   }
  }
  return result;
}

console.log(combinedArr(myArray));

// trying out the function combinedArr using a very long unsorted array
var largeArray = [[12, 35, 2, 0, 67, 65], [12, 78, 23, 1, 3, 73, 98],
[23, 46, 87, 89, 97, 34], [0, 6, 87, 45, 66, 77, 88], [12, 13, 14, 15],
[11, 21, 32, 43, 54]]

// storing the result of combinedArr function call in a variable
var combinedArray = combinedArr(largeArray);

console.log(combinedArray);

// sorting the reslut using sort()

//combinedArray.sort(function(x, y) {
// return x - y;
//});


// sorting the result without using sort()
console.log('sorting the result without using sort()');


var temp;
for (var i = 0; i <= combinedArray.length - 1; i++) {
  
  for (var j = 0; j <= combinedArray.length - 1; j++) {
    if (combinedArray[j] > combinedArray[j + 1]) {
      temp = combinedArray[j + 1];
      combinedArray[j + 1] = combinedArray[j];
      combinedArray[j] = temp;
    }

  } 
  
}
console.log(combinedArray);



