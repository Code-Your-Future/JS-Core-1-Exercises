/* Challenge 4: Vowel Remover

Create a function called shortcut to remove all the lowercase vowels in a given string.

For example:

shortcut("goodbye")  // --> "gdby"
shortcut("nodegirls")  // --> "nd grls"
shortcut('how are you today?') // --> "hw r y tdy?"
*/


 // <.............................ANSWERS......................../>

// function shortcut(vowel){
// console.log(vowel.replace(/[aeouiy]/gi, ''));
// }

// shortcut("goodbye");

var vowels = ['a', 'e', 'i', 'o', 'u'];
function shortcut(str) {
    var returnValue = [];
    for (var i = 0; i < str.length; i++) {
        if (vowels.indexOf(str[i]) === -1) {
            returnValue.push(str[i]);
        }
    }
    return returnValue.join('');
}
console.log(shortcut("goodbye"));
console.log(shortcut("nodegirls"));
console.log(shortcut("how are you today?"));

// var vowels = ['a', 'e', 'i', 'o', 'u'];
// function shortcut(str) {
//     var returnValue = '';
//     for (var i = 0; i < str.length; i++) {
//         if (vowels.indexOf(str[i]) === -1) {
//             returnValue += str[i];
//         }
//     }
//     return returnValue;
// }
// console.log(shortcut("goodbye"));
// console.log(shortcut("nodegirls"));
// console.log(shortcut("how are you today?"));