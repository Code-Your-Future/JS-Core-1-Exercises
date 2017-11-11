/**

1- Create your own sort method

https://en.wikipedia.org/wiki/Sorting_algorithm

Desired Output; [ 10, 11, 12, 13, 14, 15, 16 ]

*/

function mySort(arr) {
var stop = arr.length;
  while(stop--){

    for(var i=0; i < stop; i++)
    if (arr[i]>arr[i+1]){
      var temp;
      temp = arr[i];
      arr[i]= arr[i+1];
      arr[i+1] = temp; 
      
    }
   
  }
  

return arr;


}

var numbers = [12, 10, 15, 11, 14, 13, 16, 3, 6, 28, 1];

console.log(mySort(numbers));
