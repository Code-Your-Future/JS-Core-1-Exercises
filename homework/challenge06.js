/* Challenge 6: Vowel Remover (version 2)

Write a function `removeVowels` that takes an array of all the letters in the alphabet, and returns an array that removes all the vowels.

Start with an array of vowels:

var vowels = ['a', 'e', 'i', 'o', 'u'];

Create an array of all letters:
var alphabet = ['a', 'b', 'c', 'd', ... 'y', 'z'];

Running your function by passing in `alphabet` should give you an array of all consonants.

removeVowels(alphabet) // --> ['b', 'c', 'd', 'f', ... 'y', 'z']

*/
var vowels = ['a', 'e', 'i', 'o', 'u'];

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
// var alphabet = ['a', 'b', 'c'];

function removeVowels(letters) {
  var newAlphabet = []
  for (i = 0; i < letters.length; i++) {
    var currentLetter = letters[i];
    if (currentLetter === 'a' || currentLetter === 'e' || currentLetter === 'i' || currentLetter === 'o' || currentLetter === 'u') {
      // newAlphabet.push(currentLetter);
    } else{
      newAlphabet.push(currentLetter);

    }

  };

  return newAlphabet

}

var result = removeVowels(alphabet);

console.log(result);

// function addTwoNumbers(x,y) {
//   return (x + y);
// }

// function timesByTwenty(num) {
//   return num * 20;
// }

// var result = addTwoNumbers(10,20);

// console.log(timesByTwenty(result));


function concat(arr, whatToAdd) {
  var newArray = [];

  newArray.addAll(arr);
  newArray.add(whatToAdd);

  return newArray;


}


