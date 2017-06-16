/* Challenge 4: Vowel Remover

Create a function called shortcut to remove all the lowercase vowels in a given string.

For example:

shortcut("goodbye")  // --> "gdby"
shortcut("nodegirls")  // --> "nd grls"
shortcut('how are you today?') // --> "hw r y tdy?"
*/

// function shortcut(word) {
//     var result;
//     // we will check each character in the word
//     // if it is NOT a vowel, then we will add it to result
//     // else we will ignore

//     return result;
// }



function shortcut(word) {
    var result = '';
    for (var i = 0; i < word.length; i++) {
        if (word[i] !== 'o' && word[i] !== 'e' && word[i] !== 'i'
            && word[i] !== 'a' && word[i] !== 'u') {
            result = result + word[i];
        }
    }
    return result;

};

var word = 'goodbye';
var otherWord = 'nodegirls';
var howRu = 'how are you today?';
console.log(shortcut(word));
console.log(shortcut(otherWord));
console.log(shortcut(howRu));
