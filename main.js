/*
  We will use this file to add the Code that you will learn in JS-Core Class 1
  Update this file, then run it from the console using the command:

      node class-exercises.js
*/

var myName = "Bridget";
console.log('Hello World ' + typeof myName);

var skyIsBlue = false;
console.log(typeof skyIsBlue);

if (!skyIsBlue === true) {
  console.log("Sky is blue!");
} else {
  console.log("Sky is not blue!");
}

var myName = "Bree";
var time = 0;

 if (time < 12) {
   console.log('Good morning ' + myName);
 } else if (time >= 12 && time <= 17) {
   console.log('Good afternoon ' + myName);
} else {
  console.log('Have a good night! ' + myName);
}

console.log('Bree');
console.log('Ray');
console.log('Flav');
console.log(6 * 9);

for (; time <= 12; time++) {
  console.log(myName + " " + time);
}

for (number = 0; number < 11; number++) {
  console.log("Number is: " + number);
}

for (i = 0; i <= 100; i = i + 2) {
  console.log(i);
}
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

for (var i = 0; i < writers.length; i++) {
  if (writers[i].alive === true) {
    console.log("Hi, my name is " + writers[i].firstName + " " + writers[i].lastName + ".  I am " + writers[i].age + "years old, and work as a " + writers[i].occupation + ".");
  }
}


for (var i = 0; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0){
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  }
  // if (i % 3 === 0) {
  //    console.log("Fizz");
  // } else if (i % 5 === 0) {
  //   console.log("Buzz");
  // }
}


var junk = ['hay', 'rabbit', 'needle', 'hat'];
function findNeedle(haystack) {
for (var i = 0; i <= 4; i++) {
  if (haystack[i] === "needle") {
    console.log("Found the needle at position " + i);
   } 
  }
}
findNeedle(junk);




var myVowels = ['a', 'e', 'i', 'o', 'u'];
function shortcut(myWords) {
  var answer = [];
  for(var i = 0; i < myWords.length; i++) {
    var myLetter = myWords[i];
    if (myVowels.indexOf(myLetter) < 0) {
      answer.push(myLetter);
    }
  }
  return answer.join('');
}

var result = shortcut("goodbye my dear friend");
console.log(result);


function stringy(size) {
  var answer = [];
  for(var i = 1; i <= size; i++) {
    if ( i % 2 === 0 ) {
      answer.push(0);
    } else {
      answer.push(1);
    }
  }
  return answer.join('');
}

var result = stringy(6);
console.log(result);


var vowels = ['a', 'e', 'i', 'o', 'u'];
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'z'];
function removeVowels(myWords) {
  var answer = [];
  for(var i = 0; i < myWords.length; i++) {
    var myLetter = myWords[i];
    if (vowels.indexOf(myLetter) < 0) {
      answer.push(myLetter);
    }
  }
  return answer.join('');
}

var result = removeVowels(alphabet);
console.log(result);

var hashTag = "";
for(var i = 0; i < 7; i++) {
  hashTag = hashTag + "#";
  console.log(hashTag);
}


var refugeeCountries = ['Uganda', 'Syria', 'Russia', 'Afghan', 'Ethiopia'];
console.log(refugeeCountries);

for(var i = 0; i < refugeeCountries.length; i++) {
  console.log(refugeeCountries[i]);
}

function multiply(num1, num2) {
  var ans = num1 * num2;
  console.log(ans);
}

multiply(2, 4);

var vehicle = {
  name: 'Bicycle',
  hasWheels: true,
  color: 'red'
};

var vehicle = {
  name: 'car',
  hasWheels: true,
  color: 'black'
};



function Vehicle(name, hasWheels, color) {
  this.name = name; 
  this.hasWheels = hasWheels;
  this.color = color;
};

var bicycle = new Vehicle('bicycle', true, 'red');

console.log(bicycle.color);

var person = {
  firstName: "Bridget",
  lastName: "Kalinda",
  occupation: "Developer",
  age: 24,
  alive: true
};
console.log('Hi' + ',' + ' my name is ' + person.firstName + ' ' + person.lastName + '.' + ' I am ' + person.age + ' years old' + ', ' + ' and work as a ' + person.occupation);


function Animal (name, family, numOfLegs, eatsMeat, sound) {
  this.name = name;
  this.family = family;
  this.numOfLegs = numOfLegs;
  this.eatsMeat = eatsMeat;
  this.sound = sound;
  this.says = function() {
    console.log('the ' + this.name + ' says ' + this.sound);
  }
}; 

 var cat = new Animal('cat', 'mammal', 4, true, 'meow!');
 var dog = new Animal('dog', 'mammal', 4, true, 'woof!');
 var snake = new Animal('snake', 'reptile', 0, false, 'hiss!');
 var man = new Animal('man', 'mammal', 2, true, 'aah!');
 var cock = new Animal('cock', 'bird', 2, false, 'craws!');

 dog.says();
 cat.says();
 snake.says();
 man.says();
 cock.says();


function spiltTheBill(bill,numberOfFriends) {
    // add total cost of the bill 

     var total = 0;
     for(var i = 0; i < bill.length; i++) {
       total += bill[i];
     }


    // divide by numOfFriends

    return total / numberOfFriends;
   
}
var bill = [7.99, 6.99, 14.99, 4.99];
var numberOfFriends = 4;
spiltTheBill(bill, numberOfFriends);
console.log(spiltTheBill(bill, numberOfFriends));


function suzieOwes(priceOfKettle, priceOfMug) {
  totalCost = priceOfKettle + (priceOfMug * 3)
  return totalCost / 3;
}

suzieOwes(14.99, 9);
console.log(suzieOwes(14.99, 9));


var bottle = {
	volume: 0,
	fill: function(){
    this.volume = 100;
    console.log(this.volume);
	 	// calling this function should make you bottles volume = 100; 
	},
	drink: function(){
    this.volume -= 10;
		// calling this function should decrease your bottles volume by 10;
	},
	empty: function(){
    if (this.volume === 0) {
      return true;
    } else {
      return false;
    }
		// this function should return true if your bottles volumn = 0
	}
}


bottle.fill();
bottle.drink();
bottle.drink();
bottle.drink();

if(!bottle.empty()){
	console.log('bottles volume = ' + bottle.volume);
}

var Athlete = {
  hydrationLevel: 100,
  distanceTravelled: 0,
  drink: function(bottle) {
    this.hydrationLevel = this.hydrationLevel + bottle.volume;
    // hydration level increases
  },
  run: function(distance) {
    //Our athlete should not be able to run if their hydration level is less than or equal to 0.
    if (this.hydrationLevel <= 0) {
      return;
    }
    // hydration decreases and distance increases
    this.hydrationLevel = this.hydrationLevel - 10;
    this.distanceTravelled = this.distanceTravelled + distance;

  }
}

Athlete.run(20);
console.log(Athlete.distanceTravelled);
console.log(Athlete.hydrationLevel);
Athlete.run(20);
Athlete.run(20);
Athlete.run(20);
Athlete.run(20);
Athlete.run(20);
Athlete.run(20);
Athlete.run(20);
Athlete.run(20);
Athlete.run(20);
Athlete.run(20);
console.log(Athlete.distanceTravelled);
console.log(Athlete.hydrationLevel);
Athlete.run(20);
console.log(Athlete.distanceTravelled);
console.log(Athlete.hydrationLevel);
Athlete.drink(bottle);
console.log(Athlete.distanceTravelled);
console.log(Athlete.hydrationLevel);



