/**

1- Create your own sort method

https://en.wikipedia.org/wiki/Sorting_algorithm

Desired Output; [ 10, 11, 12, 13, 14, 15, 16 ]

*/

function mySort(array) {
  array.sort((a, b) => a - b);
  return array;
}

var numbers = [12, 10, 15, 11, 14, 13, 16];
mySort(numbers);
console.log(numbers);
