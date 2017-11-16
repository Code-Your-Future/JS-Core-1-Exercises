/**

1- Create your own sort method

https://en.wikipedia.org/wiki/Sorting_algorithm

Desired Output; [ 10, 11, 12, 13, 14, 15, 16 ]

*/

 function mySort(array) {
 	var change;
 for (var i = 0; i < array.length; i++) {
    for(var j = 0; j < array.length; j++)
        if (array[j] > array[j + 1]) {
          change = array[j + 1];
          array[j +1] = array[j];
          array[j] = change;
          }
      }
      return console.log(array);
  }
    
mySort([12, 10, 15, 11, 255, 1, 14, 13, 16]);

