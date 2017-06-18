/* Challenge 7: Water bottle

In todays class we learnt about objects and how they are a data type that allows us 
to store multiple bits of information.

Like how a person as an object can have a name or age they also have the ability 
to perform actions. To do this we can use functions as the values for our keys.

For example if we wanted our person object from todays class to speak we would code 
the following:

var person = {
	firstName: "Joe",
	lastName: "Bloggs",
	age: 95,
	speak: function(){
		console.log("hello my name is "+ this.firstName);
	}
};

You will notice here that when referring to the firstName of our person in another 
property that also belongs to our person we use the keyword 'this'. 
This relates to scope in Javascript and becomes more important as your programs 
become more complicated, we will cover the reasons for this later in the classes 
but if you would like to read more about the 'this' keyword you can do so here:
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/this 

Now we would like you to create a bottle object and give it the ability to be filled, 
drank from and a function that checks whether it is empty.

To measure this your bottle will need a volume along with fill, drink and empty keys.

We have made a start on this for you here:  

var bottle = {
	volume: 0,
	fill: function(){
	 	// calling this function should make you bottles volume = 100; 
	},
	drink: function(){
		// calling this function should decrease your bottles volume by 10;
	},
	empty: function(){
		// this function should return true if your bottles volumn = 0
	}
}

--TIP--
remember 'this' keyword

Once you have completed your object run the following and see if your answer 
matches up :)

bottle.fill();
bottle.drink();
bottle.drink();
bottle.drink();

if(!bottle.empty()){
	console.log('bottles volume = ' + bottle.volume);
}

--ANSWER--
70

*/

function Bottle() {
	this.volume = 0;
}

Bottle.prototype.fill = function () {
	this.volume = 100;
};

Bottle.prototype.drink = function () {
	if (this.volume >= 10) {
		this.volume -= 10;
	} else if (this.volume > 0) {
		this.volume = 0;
	} else {
		this.volume = 0;
	}
};

Bottle.prototype.isEmpty = function () {
	return this.volume === 0;
};

Bottle.prototype.getVolume = function () {
	return this.volume;
};

module.exports = Bottle;

/*myBottle = new Bottle();
myBottle.printVolum();
myBottle.fill();
myBottle.printVolum();
myBottle.drink();
myBottle.drink();
myBottle.drink();
myBottle.printVolum();
*/


