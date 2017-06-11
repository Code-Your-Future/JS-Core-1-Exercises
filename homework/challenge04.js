/* Challenge 4: Vowel Remover

Create a function called shortcut to remove all the lowercase vowels in a given string.

For example:

shortcut("goodbye")  // --> "gdby"
shortcut("nodegirls")  // --> "nd grls"
shortcut('how are you today?') // --> "hw r y tdy?"
*/

var vowels = ['a', 'e', 'i', 'o', 'u'];

function shortcut(sentence) {

  var resultCharacters = [];

  for(var i = 0; i < sentence.length; i++) {
    var currentLetter = sentence[i];
    if (vowels.indexOf(currentLetter) === -1) {
      resultCharacters.push(currentLetter);
    }
  }
console.log(resultCharacters.join(''));
}

shortcut("goodbye");
shortcut("nodegirls");
shortcut('how are you today?');