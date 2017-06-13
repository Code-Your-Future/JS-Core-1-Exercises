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

for (var i = 0; i < writers.length; i++ ) {
    if(writers[i].alive===true){
     console.log ("Hi, my name is " + writers[i].firstName  + " " + writers[i].lastName + ". I am " +  writers[i].age  + " years old, and work as a " + writers[i].occupation);
}   

}
for (var i=0; i < 100; i++){
    if(i% 3===0){

    console.log ("fizz");
} else if (i% 5===0){
    console.log ("buzz");
} else if ((i% 3 ===0) && (i% 5===0) )
    console.log    
}