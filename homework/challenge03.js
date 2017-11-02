/* Challenge 3: Needle in a Haystack

Can you find the needle in the haystack?

Write a function `findNeedle()` that takes an array full of junk but containing one "needle", which you need to find with a for loop.

After your function finds the needle it should return a message (as a string) that says: `"Found the needle at position x"`, with `x` being the index number at which you find the needle.

So:*/
function findNeedle(){


var haystack = ['hay', 'rabbit', 'needle', 'hat'];


     for( var i= haystack[2]; i< haystack.length; i++);{
         console.log('Found the needle at postion 2');
     }
 }

 findNeedle();

