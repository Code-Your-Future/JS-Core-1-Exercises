/**

1- Create your own sort method

https://en.wikipedia.org/wiki/Sorting_algorithm

Desired Output; [ 10, 11, 12, 13, 14, 15, 16 ]

*/

function mySort(array) {
    var swapNumber = false;
    do {
        for (var i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                var currentNumber = array[i];
                array[i] = array[i + 1];
                array[i + 1] = currentNumber;
                swapNumber = true;
            }
        }
    } while (swapNumber === true)
    return array;
}

var numbers = [12, 10, 15, 11, 14, 13, 16];
mySort(numbers);
console.log(numbers);