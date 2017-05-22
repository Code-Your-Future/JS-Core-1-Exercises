/* Challenge 3: Needle in a Haystack

Can you find the needle in the haystack?

Write a function `findNeedle()` that takes an array full of junk but containing one "needle", which you need to find with a for loop.

After your function finds the needle it should return a message (as a string) that says: `"Found the needle at position x"`, with `x` being the index number at which you find the needle.

So:

var haystack = ['hay', 'rabbit', 'needle', 'hat'];

findNeedle(haystack);

Should return:

'Found the needle at position 2'
*/
var is_result = false;
var result = "Found the needle at position: "
var noresult = "Sorry, there is no needle"
var needle_pos = 0;


function findNeedle(array) {
    var array_size = array.length;
    for (var i = 0; i < array_size; i++) {
        if (array[i] == "needle") {
            needle_pos = i;
            console.log(result + i);
            is_result = true;
        }
    }
    if (!is_result) {
        console.log(noresult);
    }


}
var haystack = ['hay', 'rabbit', 'needle', 'hat'];

findNeedle(haystack);