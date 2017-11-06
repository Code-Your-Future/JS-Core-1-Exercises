/* Challenge 6: Vowel Remover (version 2)

Write a function `removeVowels` that takes an array of all the letters in the alphabet, and returns an array that removes all the vowels.

Start with an array of vowels:

var vowels = ['a', 'e', 'i', 'o', 'u'];

Create an array of all letters:
var alphabet = ['a', 'b', 'c', 'd', ... 'y', 'z'];

Running your function by passing in `alphabet` should give you an array of all consonants.

removeVowels(alphabet) // --> ['b', 'c', 'd', 'f', ... 'y', 'z']

*/

console.log('======================= CHALLENGE 06 ==============================');

var vowels = ['a', 'e', 'i', 'o', 'u'],
    alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// First method
function removeVowels(arr) {
    return alphabet.filter(function(el) {
        return vowels.indexOf(el.toLowerCase()) == -1;
    });
}

console.log(removeVowels(alphabet));

// Second method
function removeVowels(arr) {
    for (i = 0; i <= vowels.length; i++) {
        for (j = 0; j <= arr.length; j++) {
            if(vowels[i] === arr[i]) {
                arr.splice(j, 1);
            }
        }
    }
    return alphabet;
}

console.log(removeVowels(alphabet));