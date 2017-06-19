/* Challenge 3: Needle in a Haystack

Can you find the needle in the haystack?

Write a function `findNeedleclear()` that takes an array full of junk but containing one "needle", which you need to find with a for loop.

After your function finds the needle it should return a message (as a string) that says: `"Found the needle at position x"`, with `x` being the index number at which you find the needle.

So:

var haystack = ['hay', 'rabbit', 'needle', 'hat'];

findNeedle(haystack);

Should return:

'Found the needle at position 2'
*/
var staff = ['hay', 'rabbit', 'needle', 'hat'];
var morestaff = ['hay', 'rabbit', 'needle', 'hat', 'rabbit', 'needle', 'hat'];
function findneedle(haystack) {
    for (var i = 0; i < haystack.length; i++) {
        if (haystack[i] === 'needle') {
            console.log('Found the Needle at Position '+ i);
        }
    }
}
findneedle(staff);