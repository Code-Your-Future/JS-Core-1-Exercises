/* Challenge 4: Vowel Remover

Create a function called shortcut to remove all the lowercase vowels in a given string.

For example:

shortcut("goodbye")  // --> "gdby"
shortcut("nodegirls")  // --> "nd grls"
shortcut('how are you today?') // --> "hw r y tdy?"
*/



function shortcut(lowercaseVowls) {
    var lowercaseVowls = ["a", "e", "i", "o", "u"]
    var string = ("goodbye");
    var shortcut = ("nodegirls")

    for (var i = 0; i < string.length; i++) {


    }
    return string;

}
// console.log(shortcut);
function sitdown(name) {
    return "sit down " + name;
}
console.log(sitdown(" ayub "));
console.log(sitdown(" ilyas "));
var result = sitdown("nate");
console.log(result)
function goToBed(time) {
    return " sit down ilyas and go To Bed right now " + time;
}
console.log(goToBed("  right now "));
var when = goToBed("8");
console.log(when);

var command = result + " and " + when;
console.log(command)

var sitResult = sitdown("nate")
function eat(meal) {
    return " and eat your " + meal;
}
var eatResult = eat("dinner");
console.log(sitResult + eatResult);

var goresult = goToBed(" ilyas ");
//var sitResult = sitdown(" nate  ");
console.log(goresult + sitResult);


