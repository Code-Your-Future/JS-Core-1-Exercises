/* Challenge 4: Vowel Remover

Create a function called shortcut to remove all the lowercase vowels in a given string.

For example:

shortcut("goodbye")  // --> "gdby"
shortcut("nodegirls")  // --> "nd grls"
shortcut('how are you today?') // --> "hw r y tdy?"
*/
function shortcut(str) {
  var vowels = ["a", "e", "u", "i", "o"];
  var cash = "";
  var num = 0;
  for (i = 0; i < str.length; i++) {
    for (u = 0; u < vowels.length; u++) {
      if (str[i] === vowels[u]) {
        num++;
      }
    }
    if (num === 0) {
      cash = cash + str[i];
    } else {
      num = 0;
    }
  }
  return cash;
}
console.log(shortcut("goodbye")); // --> "gdby"
console.log(shortcut("nodegirls")); // --> "nd grls"
console.log(shortcut("how are you today?")); // --> "hw r y tdy?
