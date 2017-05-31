/* Challenge 4: Vowel Remover

Create a function called shortcut to remove all the lowercase vowels in a given string.

For example:

shortcut("goodbye")  // --> "gdby"
shortcut("nodegirls")  // --> "nd grls"
shortcut('how are you today?') // --> "hw r y tdy?"
*/

function removeVowels(stringToHandle, lettersToRemove) {
    var isVowel;
    var tempString = "";
    for (i = 0; i < stringToHandle.length; i++) {
        isVowel = false;
        for (j = 0; j < lettersToRemove.length; j++) {
            if (stringToHandle[i] === lettersToRemove[j]) {
                isVowel = true;
            }
        }
        if (!isVowel) {
            tempString += stringToHandle[i];
        }
    }
    return tempString;
}

var text = "how are you today?";

var vowels = ["a", "e", "i", "o", "u"];

var newText = removeVowels(text, vowels);


console.log(newText);