/* Challenge 4: Vowel Remover

Create a function called shortcut to remove all the lowercase vowels in a given string.

For example:

shortcut("goodbye")  // --> "gdby"
shortcut("nodegirls")  // --> "nd grls"
shortcut('how are you today?') // --> "hw r y tdy?"
*/
function shortcut (enterString) {
    newString = "";
    vowal = enterString.split("");
    for (i=0; i<vowal.length; i++) {
        if (vowal[i] !== 'a' && vowal[i] !== 'e' && vowal[i] !== 'i' && vowal[i] !== 'o' && vowal[i] !== 'u' ) {
            newString = newString + vowal[i];
        }
    }

    console.log (newString);
}
shortcut ("goodbye");