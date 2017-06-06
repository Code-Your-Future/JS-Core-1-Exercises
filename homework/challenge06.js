/* Challenge 6: Vowel Remover (version 2)

Write a function `removeVowels` that takes an array of all the letters in the alphabet, and returns an array that removes all the vowels.

Start with an array of vowels:

var vowels = ['a', 'e', 'i', 'o', 'u'];

Create an array of all letters:
var alphabet = ['a', 'b', 'c', 'd', ... 'y', 'z'];

Running your function by passing in `alphabet` should give you an array of all consonants.

removeVowels(alphabet) // --> ['b', 'c', 'd', 'f', ... 'y', 'z']

*/


vowels = ['a', 'e', 'i', 'o', 'u'];
alphabet = ['a', 'b', 'c', 'd', ... 'y', 'z'];


var removeVowels =function (letters) {
    for (var i = 0; i < letters; i++ ){
        if (letters[i] ==='a' || letters[i] ==='e' || letters[i] ==='i' || letters[i] === 'o' || letters[i] === 'u')
    var result = removeVowels(letters);
    console.info(result);

return alphabet
}
}


