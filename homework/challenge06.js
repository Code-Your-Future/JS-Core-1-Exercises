/* Challenge 6: Vowel Remover (version 2)

Write a function `removeVowels` that takes an array of all the letters in the alphabet, and returns an array that removes all the vowels.

Start with an array of vowels:

var vowels = ['a', 'e', 'i', 'o', 'u'];

Create an array of all letters:
var alphabet = ['a', 'b', 'c', 'd', ... 'y', 'z'];

Running your function by passing in `alphabet` should give you an array of all consonants.

removeVowels(alphabet) // --> ['b', 'c', 'd', 'f', ... 'y', 'z']

*/ var alphabet = ['a',' b','c','d', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',' u', 'v','w', 'x', 'y', 'z' ];
   var vowels   = [ 'a' ,'e' ,'i' ,'o' ,'u']; 
 

   function removeVowels(arg){
     var outcome =[];
     for(var i = 0; i <arg.length; i++) {
       var existingLetter = arg[i];
       if (vowels.indexOf(existingLetter) === -1) {
        outcome.push(existingLetter);
       }
     }
        return outcome.join('');
   }

   var ultimate = removeVowels(alphabet);
  console.log(ultimate);
   
   
