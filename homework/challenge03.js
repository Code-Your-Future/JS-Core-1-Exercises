/* Challenge 3: Needle in a Haystack

Can you find the needle in the haystack?

Write a function `findNeedle()` that takes an array full of junk but containing one "needle", which you need to find with a for loop.

After your function finds the needle it should return a mess"Found the needle at position x"`, with `x` being the index number at which you find the needle.age (as a string) that says: `

So:

var haystack = ['hay', 'rabbit', 'needle', 'hat'];

findNeedle(haystack);

Should return:

'Found the needle at position 2'
*/

var haystack = ['hay', 'rabbit', 'needle', 'hat'];
function findNeedle(arr) {

return "Found the needle at position " + arr.indexOf("needle");   

    for (var i = 0; i <= arr.length - 1; i++) {
		if(arr[i] === "needle") {
			return 'Found the needle at position ' + i;
		}
}
}


console.log(findNeedle(haystack));

// how about return....discuss with Eugen.