/**
Flatten and sort list of lists

Write a function to make myArray flatten and sorted.

Desired Output;

[1, 2, 5, 7, 8, 9, 12, 15, 20, 30, 50, 72, 81]

*/

var newArray = [[1, 2, 5, 7],
[20, 30, 50, 72, 81], [8, 9, 12, 15]];



function flattenMyArray(arrr) {
    var arrFlat = [];

    for (i = 0; i < arrr.length; i++) {
        arrFlat = arrFlat.concat(arrr[i]);

    }

    console.log(arrFlat);
    return arrFlat;


}



/*......................sorting function.......................*/


function mySort(arr) {
    var stop = arr.length;
    while (stop--) {


        for (var i = 0; i < stop; i++)
            if (arr[i] > arr[i + 1]) {
                var temp;
                temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;

            }

    }


    return arr;


}



console.log(mySort(flattenMyArray(newArray)));
