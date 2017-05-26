/* Challenge 4: Vowel Remover

Create a function called shortcut to remove all the lowercase vowels in a given string.

For example:

shortcut("goodbye")  // --> "gdby"
shortcut("nodegirls")  // --> "nd grls"
shortcut('how are you today?') // --> "hw r y tdy?"
*/
//alternative one
var shortcut = function(str) {
    var strArray = str.split("");
    var newStr = "";
    for (var i = 0; i < strArray.length; i++) {
        if (strArray[i] !== "a" && strArray[i] !== "e" && strArray[i] !== "i" && strArray[i] !== "o" && strArray[i] !== "u") {
            newStr = newStr + strArray[i];
        }
    }
    console.log(newStr);
}
shortcut("how are you today?");


//alternative 2
var vowels = ['a', 'e', 'i', 'o', 'u'];
var shortcut = function(str) {
    var strArray = str.split("");
    strArray = strArray.filter(function(value) {
        if (!(vowels.includes(value))) {
            return value;
        }
    }).join("");
    console.log(strArray);
}
shortcut("nodegirls");