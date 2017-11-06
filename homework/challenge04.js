/* Challenge 4: Vowel Remover

Create a function called shortcut to remove all the lowercase vowels in a given string.

For example:

shortcut("goodbye")  // --> "gdby"
shortcut("nodegirls")  // --> "nd grls"
shortcut('how are you today?') // --> "hw r y tdy?"
*/
console.log('== CHALLENGE 04 ==');

function shortcut(str) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var strSize = str.split('');
     return strSize.filter(function(el) {
        return vowels.indexOf(el.toLowerCase()) == -1;
      }).join('');
}

console.log(shortcut('I am called Mohsen Moradi.'));
console.log(shortcut('Lorem ipsum dolor sit amet, consectetuer adipiscing elit, pretium quis, sem. Nulla consequat massa quis enim.'));
