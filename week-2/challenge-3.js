/**
Flatten and sort list of lists

Write a function to make myArray flatten and sorted.

Desired Output;

[1, 2, 5, 7, 8, 9, 12, 15, 20, 30, 50, 72, 81]

*/

var myArray = [
    [1, 2, 5, 7],
    [8, 9, 12, 15],
    [20, 30, 50, 72, 81]
];

function flatternAndSort(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            newArr.push(arr[i][j]);
        }
    }
    var result = newArr.sort(function(a, b) {
        return a - b;
    });
    console.log(result);
}
flatternAndSort([
    [29, 45, 645, ],
    [37, 90, 23, 93, 11],
    [28, 96, 13]
]);
flatternAndSort(myArray);
var myArray = [
    [1, 2, 5, 7],
    [8, 9, 12, 15],
    [20, 30, 50, 72, 81]
];


/* ************************************************************************************************************************
                                                   Another method
*************************************************************************************************************************/

function flatternAndSort(myArray) {
    var newArr = [];
    newArr = myArray[0].concat(myArray[1], myArray[2]);
    var result = newArr.sort(function(a, b) {
        return a - b;
    });
    console.log(result);
}

var myArray = [
    [1, 2, 5, 7],
    [8, 9, 12, 15],
    [20, 30, 50, 72, 81]
];

flatternAndSort([
    [29, 45, 645, ],
    [37, 90, 23, 93, 11],
    [28, 96, 13]
]);
flatternAndSort(myArray);