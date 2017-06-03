
/* Challenge 4: Vowel Remover

Create a function called shortcut to remove all the lowercase vowels in a given string.

For example:

shortcut("goodbye")  // --> "gdby"
shortcut("nodegirls")  // --> "nd grls"
shortcut('how are you today?') // --> "hw r y tdy?"
*/
function shortcut (enterString) {
    newString = "";
    anArray = enterString.split("");
    for (i=0; i<anArray.length; i++) {
        if (anArray[i] !== 'a' && anArray[i] !== 'e' && anArray[i] !== 'i' && anArray[i] !== 'o' && anArray[i] !== 'u' ) {
            newString = newString + anArray[i];
        }
    }

    console.log (newString);
}
shortcut ("how are you?");

