/* Challenge 6: Vowel Remover (version 2)

Write a function `removeVowels` that takes an array of all the letters in the alphabet, and returns an array that removes all the vowels.

Start with an array of vowels:

var vowels = ['a', 'e', 'i', 'o', 'u'];

Create an array of all letters:
var alphabet = ['a', 'b', 'c', 'd', ... 'y', 'z'];

Running your function by passing in `alphabet` should give you an array of all consonants.

removeVowels(alphabet) // --> ['b', 'c', 'd', 'f', ... 'y', 'z']

*/

var alphabet = ['a', 'b', 'c', 'd','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y', 'z'];

var vowels = ['a', 'e', 'i', 'o', 'u'];


function removeVowels (alphaArray , vowelsArray) {
    var newArray = [ ];
    for (i=0; i< alphaArray.length; i++){
        var isConsonant= true;
        for (c=0; c<vowelsArray.length; c++){
            if( alphaArray[i]=== vowelsArray[c]){
                isConsonant = false;
            } 
        }
        if (isConsonant){
            newArray.push(alphaArray[i]);
        }
    }
    return newArray;   
}

console.log(removeVowels(alphabet, vowels));

