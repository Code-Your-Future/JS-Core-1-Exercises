/* Challenge 4: Vowel Remover

Create a function called shortcut to remove all the lowercase vowels in a given string.

For example:

shortcut("goodbye")  // --> "gdby"
shortcut("nodegirls")  // --> "nd grls"
shortcut('how are you today?') // --> "hw r y tdy?"
*/

// function noVowels (text) {
//     var vowels=['a', 'e', 'i', 'o', 'u'];
//     var newText="";
//     for(i=0; i<text.length; i++) {
//       if ((text[i]!='a')&&(text[i]!='e')&&(text[i]!='i')&&(text[i]!='o')&&(text[i]!='u')) {
//          newText= newText + text[i];    
//       }  
//     }
//     console.log(newText);
// }

function shortcut (text) {
    var vowels=['a', 'e', 'i', 'o', 'u'];
    var newText="";
    for(i=0; i<text.length; i++) {
        var isVowel= false;
         for (j=0; j<vowels.length; j++) {
             if (text[i] === vowels[j]){
                 isVowel = true;
             }
         }
         if (!isVowel){
             newText = newText + text[i];
         }
    }
    console.log(newText);
}

var message = "goodbye";
shortcut(message);