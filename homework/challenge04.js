/* Challenge 4: Vowel Remover

Create a function called shortcut to remove all the lowercase vowels in a given string.

For example:

shortcut("goodbye")  // --> "gdby"
shortcut("nodegirls")  // --> "nd grls"
shortcut('how are you today?') // --> "hw r y tdy?"
*/
var vowels = ['a', 'e','i','o', 'u'];
function shortcut(quote) {
    var outcome = [];
    for(var i = 0; i < quote.length; i++){
        var existingLetter = quote [i];
        if (vowels.indexOf(existingLetter) === -1){
            outcome.push(existingLetter);

        }

    }
    return outcome.join ('');
}
var ultimate = shortcut("goodbye my dear friend");
console.log(ultimate);