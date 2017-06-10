"Hi, my name is {firstName} {lastName}. I am {age} years old, and work as a {occupation}."

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
var writers;
for (i=0; i<writers.length; i++) {
    if (writers[i].alive === true){
console.log("Hi,my name is " +writers[i].firstName +" " +writers[i].lastName +".Iam "+writers[i].age );
  }
}