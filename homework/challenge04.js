/* Challenge 4: Vowel Remover

Create a function called shortcut to remove all the lowercase vowels in a given string.

For example:

shortcut("goodbye")  // --> "gdby"
shortcut("nodegirls")  // --> "nd grls"
shortcut('how are you today?') // --> "hw r y tdy?"
*/

// var string = 'goodby'
// function shortcut (){
//     if (string ==='o')
//     console.log(string.length)
//     else
//     console.log(string);


// var test = string.replace("oo","");
// console.log(test)
    // var newString = string.replace("a",space).replace("e",space).replace("i", space).replace("o", space).replace("u",space)
var string = 'google';
function shortcut (remove){
    for (var i=0 ; i <= string.length; i++ ){
    if ((string[i] != "a") && (string[i] != "e") && (string[i] != "i") && (string[i] != "o") && (string[i] != "u")){
        var newString = string[i]
        console.log (newString)
    }
}
};

shortcut();

