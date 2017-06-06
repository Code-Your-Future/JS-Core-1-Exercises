/* Challenge 4: Vowel Remover

Create a function called shortcut to remove all the lowercase vowels in a given string.

For example:

shortcut("goodbye")  // --> "gdby"
shortcut("nodegirls")  // --> "nd grls"
shortcut('how are you today?') // --> "hw r y tdy?"
*/


function shortcut(words) {
    var result = '';
    for (var i = 0; i < words.length; i++) {
        var letter = words[i];
        if (letter !== 'a' && letter !== 'e' && letter !== 'i' && letter !== 'o' && letter !== 'u') {
            result += letter;
        }
    }
    console.log(result);
}

shortcut("goodbye");
shortcut("nodegirls");
shortcut('hor are you today?');
