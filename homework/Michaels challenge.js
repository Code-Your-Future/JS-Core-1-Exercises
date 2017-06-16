var input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];  // ['M', 'Michael', 'John', 'Won']
var compareTo = [3, 7, 8]; // ['M', 'Won']

// // got answer by myself
function compare() {
    var array = [];
    for (var i = 0; i < input.length; i++) {
        var isFound = false;
        for (var j = 0; j < compareTo.length; j++) {
            if (input[i] === compareTo[j]) {
                isFound = true;
            }
        }
        if (isFound === false) {
            array.push(input[i]);
        }
    }
    return array;
}
// calling the function
console.log (compare());


// another example of practice
var myFriends = ['M', 'Michael', 'John', 'Won'];
var myName = ['M', 'Won'];
var array = [];

function findingName() {
    for (var i = 0; i < myFriends.length; i++) {
        var isSame = false;
        for (var j = 0; j < myName.length; j++) {
            if (myFriends[i] === myName[j]) {
                isSame = true;
            }
        }
        if (isSame === false) {
            array.push(myFriends[i]);
        }
    }
    return array;
}
console.log(findingName());








