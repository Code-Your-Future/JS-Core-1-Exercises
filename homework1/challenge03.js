/* Challenge 3: Needle in a Haystack
Can you find the needle in the haystack?
Write a function `findNeedle()` that takes an array 
full of junk but containing one "needle", which you 
need to find with a for loop.After your function 
finds the needle it should return a 
message (as a string) that says: 
`"Found the needle at position x"`, with `x` being 
the index number at which you find the needle.

So:

var haystack = ['hay', 'rabbit', 'needle', 'hat'];
findNeedle(haystack);
Should return:
'Found the needle at position 2'
*/

function findNeedle(haystack) {
    var result = "Found the needle at position " + i;
    for (var i = 0; i < haystack.length; i++) {
        if (haystack[i] === "needle") {
            result = "Found the needle at position " + i;
        }
    }
    return result;
}

var myHayStack = ['hay', 'rabbit', 'needle', 'uuiooo', 'hat'];
console.log(findNeedle(myHayStack));


// var myFriends = ["John", "Lynn", "Ian", "Soe", "David", "Phru","David","David"];
// function findDavid() {
//     var answer = [];
//     for (var i = 0; i < myFriends.length; i++) {
//         if (myFriends[i] === "David") {
//             answer.push(i);
//         }
//     }
//     return answer;
// };

// // findDavid(myFriends);
// console.log(findDavid());




// function findBanana() {
//     var result = [];
//     for (var i = 0; i < fruits.length; i++) {
//         if (fruits[i] === "banana") {
//             result.push(i);
//         }
//     }
//     return result;
// };
// var fruits = ["apple","banana", "banjjana", "orange", "banjjana", "grapes","banjjjana", "banjjjana"];
// console.log(findBanana());


