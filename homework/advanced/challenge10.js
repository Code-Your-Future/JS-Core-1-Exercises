/*Challenge 8: Athlete

Now we are going to create an athlete object that can drink from the bottle we created 
in the last challenge.

Our athlete should hold values for their hydration level and the distance 
they have travelled. 

They should be able to run and drink.

When they run their hydration level should decrease while their distance should 
increase.

Our athlete should not be able to run if their hydration level is less than or equal to 0.

When our athlete drinks their hydration should increase.

--EXTRA--

Really our athlete should only be able to drink if the bottles volume is more than 0 - see
if you can add a conditional to your athletes drink function that only allows them
to drink if your bottle is not empty.
Tip: you will need to research node require1




*/

const BottleModule = require("./challenge09.js");

function Athlete(name) {
    this.name = name;
    this.hydration = 100;
    this.distance = 0; 
}

Athlete.prototype.getHydration = function() {
    return this.hydration;
};

Athlete.prototype.drinkFromNyBottle = function () {
    this.hydration = 100;
};

Athlete.prototype.canRun = function() {
    return (this.hydration > 0);
};

Athlete.prototype.getDistance = function() {
    return this.distance;
};

Athlete.prototype.run = function() {
    var currentDistance = this.distance;
    if (this.hydration > 0) {
        while (this.hydration > 0) {
            this.distance += 30;
            this.hydration -= 10;
        }
        console.log(`in this round, I have run ${this.distance - currentDistance}. I have run ${this.distance} since I have started. Right now my hydration is down to ${this.hydration}. `);
        return true;
    } else {
        return false;
    }
};

Athlete.prototype.report = function() {
    console.log (`I'm an athlett, my name is ${this.name}, my hydration level is ${this.hydration} and I have run ${this.distance} meters. I have a bottle of water ${myBottle.getVolume()}% full. `);
}

Athlete.prototype.drink = function() {
    if (this.hydration <= 10) {
        
    }
};

var myBottle = new BottleModule();
myBottle.fill();
var john = new Athlete("John");

console.log();
john.report();

function startRunning (athlete, water) {
    while ((john.canRun()) || !(myBottle.isEmpty())) {
        if (john.canRun()) {
            john.run();
        } else if (!(myBottle.isEmpty())) {
            john.drinkFromNyBottle();
            myBottle.drink();
        }
    }
    john.report();
}

startRunning();

