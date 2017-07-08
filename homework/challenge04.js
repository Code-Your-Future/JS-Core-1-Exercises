/* Challenge 4: Vowel Remover

Create a function called shortcut to remove all the lowercase vowels in a given string.

For example:

shortcut("goodbye")  // --> "gdby"
shortcut("nodegirls")  // --> "nd grls"
shortcut('how are you today?') // --> "hw r y tdy?"
*/


var vowels = ['a', 'e', 'i', 'o', 'u'];
var originalphrase = 'goodbye';
var name ='anthony'

function shortcut(phrase) {
  var newphrase = "";
  for (var i = 0; i < originalphrase.length; i++) {
    var currentletter = phrase[i];
    if (currentletter !== 'o'&& currentletter !== 'e'&& currentletter !== 'i'&& currentletter !== 'u'&& currentletter !== 'a') {
      newphrase+=currentletter;
    } else {
   //   newphrase+=currentletter;
    //  console.log(currentletter);
    }


  } console.log(newphrase);
}

shortcut(originalphrase);
shortcut(name)


