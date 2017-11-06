/**

1- Create your own sort method

https://en.wikipedia.org/wiki/Sorting_algorithm

Desired Output; [ 10, 11, 12, 13, 14, 15, 16 ]

*/

function mySort(array) {
  var swap;
  for (var i = 0; i <= array.length -1; i++) {

    for(var j =0; j <= array.length - 1; j++) {

      if (array[j] > array[j + 1]) {
        swap = array[j + 1];
        array[j +1] = array[j];
        array[j] = swap;
        }
        
    }
  }
  return array;
}

var numbers = [12, 10, 15, 11, 14, 13, 16];
var moreNumbers = [0, 8, 3, 0, 5, 88, 288, 675, 1, 23, 12, 67, 45, 23];

console.log(mySort(numbers));
console.log(mySort(moreNumbers));

