/* Challenge 6: Vowel Remover (version 2)

Write a function `removeVowels` that takes an array of all the letters in the alphabet, and returns an array that removes all the vowels.

Start with an array of vowels:

var vowels = ['a', 'e', 'i', 'o', 'u'];

Create an array of all letters:
var alphabet = ['a', 'b', 'c', 'd', ... 'y', 'z'];

Running your function by passing in `alphabet` should give you an array of all consonants.

removeVowels(alphabet) // --> ['b', 'c', 'd', 'f', ... 'y', 'z']

*/
var alphabet = ['a', 'b', 'c', 'd','e',
                'f', 'g', 'h','i', 'j',
                'k','l','m', 'n','o',
                'p', 'q', 'u', 'r',
                's','t', 'v',
                'w','x','y',
                'z'];

function removeVowels(alphabet){
  alphabet.splice(alphabet.indexOf('a'), 1);
  alphabet.splice(alphabet.indexOf('e'), 1);
  alphabet.splice(alphabet.indexOf('o'), 1);
  alphabet.splice(alphabet.indexOf('u'), 1);
  alphabet.splice(alphabet.indexOf('i'), 1);
  return 'these are alphabet without vowels '+ alphabet;
}
  console.log(removeVowels(alphabet));
