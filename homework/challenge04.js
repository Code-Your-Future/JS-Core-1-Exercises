/* Challenge 4: Vowel Remover

Create a function called shortcut to remove all the lowercase vowels in a given string.

For example:

shortcut("goodbye")  // --> "gdby"
shortcut("nodegirls")  // --> "nd grls"
shortcut('how are you today?') // --> "hw r y tdy?"
*/

function removevowel(string) {
    var result = "";
    var string_size = string.length;
    for (var i = 0; i < string_size; i++) {
        if (!((string[i] === "a") || (string[i] === "A") || (string[i] === "e") || (string[i] === "E")
            || (string[i] === "i") || (string[i] === "I") || (string[i] === "o")
            || (string[i] === "O") || (string[i] === "u") || (string[i] === "U"))) {
            result += string[i];

        }
    }
    console.log(result);
}
var given_string = "My Name is YOHANNES!";
removevowel(given_string);
var given_string = ('goodbye');
removevowel(given_string);
var given_string = ('node girls');
removevowel(given_string);
var given_string = ('how are you today?');
removevowel(given_string);