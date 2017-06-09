/* Challenge 1: Famous Writers

Did you know you can also have an array of objects? We've created one for you here. Loop through the array, and for each object, `console.log()` out the sentence:

"Hi, my name is {firstName} {lastName}. I am {age} years old, and work as a {occupation}."

Here is the array:

var writers = [
  {
    firstName: "Virginia",
    lastName: "Woolf",
    occupation: "writer",
    age: 59,
    alive: false
  },


  {
    firstName: "Zadie",
    lastName: "Smith",
    occupation: "writer",
    age: 41,
    alive: true
  },
  {
    firstName: "Jane",
    lastName: "Austen",
    occupation: "writer",
    age: 41,
    alive: false
  },
  {
    firstName: "bell",
    lastName: "hooks",
    occupation: "writer",
    age: 64,
    alive: true
  },
];

If you want an extra challenge, only `console.log()` the writers that are alive.
*/

/*var writersFamous; 
 ("Virginia' + Woolf" + age  + "years old."){
   firstName("itersFamous ");
    lastName("itersFamous");
    occupation("writer"),;
  

function printingNames(name1, name2){
  console.info(name1 + " is 27 years old " + name2 + " is 15 years old " );
}

printingNames("habiba","steve");*/
var writers = [
  {
    firstName: "Virginia",
    lastName: "Woolf",
    occupation: "writer",
    age: 59,
    alive: false
  },


  {
    firstName: "Zadie",
    lastName: "Smith",
    occupation: "writer",
    age: 41,
    alive: true
  },
  {
    firstName: "Jane",
    lastName: "Austen",
    occupation: "writer",
    age: 41,
    alive: false
  },
  {
    firstName: "bell",
    lastName: "hooks",
    occupation: "writer",
    age: 64,
    alive: true
  },
];

//con.log("Hi, my name is" + writers[0].firstName + writers[0].lastName +  "I am" +writers+ age+ "years old, and work as a" +writers[i].occupation.);
//console.log(writers[0]);
var Virginia= writers[0];
console.log(writers[0].firstName)
for(var i = 0; i <= writers.length; i++){
  console.log (i);

};
console.log(" hi my name is " + writers[0].firstName+ " "+writers[0].lastName+" i am "+writers[0].age+" years old "+writers[0].occupation);