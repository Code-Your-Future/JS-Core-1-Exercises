/**

1- Create your own sort method

https://en.wikipedia.org/wiki/Sorting_algorithm

Desired Output; [ 10, 11, 12, 13, 14, 15, 16 ]

*/
var numbers = [12, 10, 15, 11, 14, 13, 16];




function mySort(array) {





    for(var i = 0; i < array.length; i++) {
        for(var j = 0; j < array.length - i - 1; j++) {   // CAN'T UNDERSTAND THIS LINE!
            if(array[j] > array[j + 1]) {
                var temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            } 
        }



    }
        console.log(array);

}

mySort(numbers);






































// function mySort(array) {
//      var swapped;
//     do {
//         swapped = false;
//         for (var i=0; i < array.length-1; i++) {
//             if (array[i] > array[i+1]) {
//                 var temp = array[i];
//                 array[i] = array[i+1];
//                 array[i+1] = temp;
//                 swapped = true;
//             }
//         }
//     } while (swapped);
//     console.log(array);
// }