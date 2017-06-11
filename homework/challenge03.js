/* Challenge 3: Needle in a Haystack

Can you find the needle in the haystack?

Write a function `findNeedle()` that takes an array full of junk but containing one "needle", which you need to find with a for loop.

After your function finds the needle it should return a message (as a string) that says: `"Found the needle at position x"`, with `x` being the index number at which you find the needle.

So:
*/
function findNeedle(array){
    for(var i=0; i<array.length; i++){
      if (array[i] === "needle") {
        return 'Found the ' +array[i]  +' at position ' +i;
      }
    }
}
var haystack = ['hay', 'rabbit', 'needle', 'hat', 'asdasd', 'asdasdas'];

var x = findNeedle(haystack);
console.log (x);
/*
Should return:
'Found the needle at position 2'
*/
