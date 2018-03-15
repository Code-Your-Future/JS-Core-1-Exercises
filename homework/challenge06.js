/* Challenge 6: Vowel Remover (version 2)

Write a function `removeVowels` that takes an array of all the letters in the alphabet, and returns an array that removes all the vowels.

Start with an array of vowels:

var vowels = ['a', 'e', 'i', 'o', 'u'];

Create an array of all letters:
var alphabet = ['a', 'b', 'c', 'd', ... 'y', 'z'];

Running your function by passing in `alphabet` should give you an array of all consonants.

removeVowels(alphabet) // --> ['b', 'c', 'd', 'f', ... 'y', 'z']

*/
var vowels = ["a", "e", "i", "o", "u"];

var alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "w",
  "x",
  "v",
  "y",
  "z"
];
function removeVowels(array) {
  var cash = array.slice();
  for (i = 0; i < cash.length; i++) {
    if (vowels.indexOf(cash[i]) >= 0) {
      cash.splice(i, 1);
      i--;
    }
  }
  return cash;
}
var consonants = removeVowels(alphabet);
console.log(consonants);
