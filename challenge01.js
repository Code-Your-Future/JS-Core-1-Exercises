//"Hi, my name is {firstName} {lastName}. I am {age} years old, and work as a {occupation}."

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
//============================First Way========================================
console.log("\n    FIRST WAY : \n")
console.log(" Hi, my name is "+ writers[0].firstName+" "+writers[0].lastName  +" I am " +writers[0].age+
 " years old, and work as a "+writers[0].occupation+". ")

 console.log(" Hi, my name is "+ writers[1].firstName+" "+writers[1].lastName  +" I am " +writers[1].age+
  " years old, and work as a "+writers[1].occupation+". ")

  console.log(" Hi, my name is "+ writers[2].firstName+" "+writers[2].lastName  +" I am " +writers[2].age+
   " years old, and work as a "+writers[2].occupation+". ")

   console.log(" Hi, my name is "+ writers[3].firstName+" "+writers[3].lastName  +" I am " +writers[3].age+
    " years old, and work as a "+writers[3].occupation+". ")

    //============================Secand Way========================================
    console.log("\n   Secand Way : \n")
    for(var i=0 ; i<writers.length;i++){
      console.log(" Hi, my name is "+ writers[i].firstName+" "+writers[i].lastName  +" I am " +writers[i].age+
       " years old, and work as a "+writers[i].occupation+". ")
    }

    //============================Extra if alive========================================
    console.log("\n   Extra if alive : \n")
    for(var i=0 ; i<writers.length;i++){
      if(writers[i].alive===true){
        console.log(" Hi, my name is "+ writers[i].firstName+" "+writers[i].lastName  +" I am " +writers[i].age+
         " years old, and work as a "+writers[i].occupation+". ")
      }

    }
