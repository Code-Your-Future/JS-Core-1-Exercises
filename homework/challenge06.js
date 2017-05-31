/* Challenge 6: Vowel Remover (version 2)

Write a function `removeVowels` that takes an array of all the letters in the alphabet, and returns an array that removes all the vowels.

Start with an array of vowels:

var vowels = ["a", "e", "i", "o", "u"];

Create an array of all letters:
var alphabet = ["a", "b", "c", "d", ... "y", "z"];

Running your function by passing in `alphabet` should give you an array of all consonants.

removeVowels(alphabet) // --> ["b", "c", "d", "f", ... "y", "z"]

*/

function removeVowels(stringToHandle, lettersToRemove) {
    var isVowel;
    var tempString = [];
    var tempStringIndex = 0;
    for (i = 0; i < stringToHandle.length; i++) {
        isVowel = false;
        for (j = 0; j < lettersToRemove.length; j++) {
            if (stringToHandle[i] === lettersToRemove[j]) {
                isVowel = true;
            }
        }
        if (!isVowel) {
            tempString[tempStringIndex] = stringToHandle[i];
            tempStringIndex++;
        }
    }
    return tempString;
}


var vowels = ["a", "e", "i", "o", "u"];

var alphabet = [];

for (i = 0; i < 26; i++) {
    alphabet[i] = String.fromCharCode(97+i);
}

console.log("All the alphabet:  " + alphabet);

console.log("vowels removed:    " + removeVowels(alphabet, vowels));


