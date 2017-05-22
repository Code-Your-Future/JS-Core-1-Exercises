/* Challenge 4: Vowel Remover

Create a function called shortcut to remove all the lowercase vowels in a given string.

For example:

shortcut("goodbye")  // --> "gdby"
shortcut("nodegirls")  // --> "nd grls"
shortcut('how are you today?') // --> "hw r y tdy?"
*/

var string_result = "";
function shortcut(string) {
    var string_size = string.length;
    for (var i = 0; i < string_size; i++) {
        if (!((string[i] === "o") || (string[i] === "e") || (string[i] === "a") || (string[i] === "u") || (string[i] === "i"))) {
            string_result += string[i];
        }
    }
    console.log(string_result);
}
var given_string = "How are you today?";
shortcut(given_string);