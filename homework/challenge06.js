/* Challenge 6: Vowel Remover (version 2)

Write a function `removeVowels` that takes an array of all the letters in the alphabet, and returns an array that removes all the vowels.

Start with an array of vowels:

var vowels = ['a', 'e', 'i', 'o', 'u'];

Create an array of all letters:
var alphabet = ['a', 'b', 'c', 'd', ... 'y', 'z'];

Running your function by passing in `alphabet` should give you an array of all consonants.

removeVowels(alphabet) // --> ['b', 'c', 'd', 'f', ... 'y', 'z']

*/

var array_result = [];
function removeVowels(alphabet) {
    var array_size = alphabet.length;
    for (var i = 0; i < array_size; i++) {
        if (!((alphabet[i] == "o") || (alphabet[i] == "e") || (alphabet[i] == "a") || (alphabet[i] == "u") || (alphabet[i] == "i")
            || (alphabet[i] == "O") || (alphabet[i] == "E") || (alphabet[i] == "A") || (alphabet[i] == "U") || (alphabet[i] == "I"))) {
            array_result.push(alphabet[i]);

        }
    }
    console.log(array_result);
}
var alphabet = ['A', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'b', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

removeVowels(alphabet);
