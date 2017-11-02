/* Challenge 4: Vowel Remover

Create a function called shortcut to remove all the lowercase vowels in a given string.

For example:

shortcut("goodbye")  // --> "gdby"
shortcut("nodegirls")  // --> "nd grls"
shortcut('how are you today?') // --> "hw r y tdy?"
*/
function shortcut(string) {
    
      var shortcut = "";
      for (var i = 0; i < string.length; i++) {
          if (!isVowel(string[i])) {
            shortcut += string[i];
          }
        }
        return shortcut;
    }
    
    function isVowel(char) {
      return 'aeiou'.includes(char);
    }
    
    console.log(shortcut('Ameer kabir'));