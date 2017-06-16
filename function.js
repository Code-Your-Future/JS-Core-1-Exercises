
function myName() {
    console.log ("Won")
    console.log ("Maung")
    console.log ("Thein")
}

function printName(name, age, occupation) {
    console.log("My name is " + name + "," + age + " " + "years " + "old" + " and I am a " + occupation + ".");
}
printName("David", 30, "student");

// parameters (arguments) - data used by the function
function aboutMe(name,age,occupation,place) {
    console.log ("I am " + name + " who is " + age + " years old." + "I am a " 
    + occupation + " and currently living in " + place + ".");
}

// we are calling the function and 
// passing it the data it needs
aboutMe("Won Maung Thein", 33, "student", "Edinburgh");


