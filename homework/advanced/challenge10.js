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
Tip: you will need to research node require


*/

//Pseudo code
// 1. require the bottle object from challenge#9
// 2. construct a constructor function for creating different atthelet object that takes hydration level,
// distance run and bootle object
// 3. create run and drink functions inside the Atthelet object
// 3.1 run function should allow the atthelet only hydration level is >= 0
// 3.2 drink function should allow the atthelet to drink only the bottle is not empty
//4. create a function that returns the status of the atthelet


var bottle = require('./challenge09.js');
var Atthelet = function(hydration, distance, bottle) {
    this.hydration = hydration;
    this.distance = distance;
    this.bottle = bottle;
    this.run = function() {
        if (hydration >= 0) {
            this.hydration = this.hydration - 10;
            this.distance = this.distance + 10;
        } else {
            return false;
        }
    };
    this.drink = function() {
        if (!(bottle.empty())) {
            this.hydration = this.hydration + 10;
            this.bottle.drink();
        } else {
            return false;
        }
    };
    this.status = function() {
        console.log("You have run " + this.distance + "km and your hydration level is " + this.hydration + "%");
    }
};

var kiya = new Atthelet(50, 50, bottle);
kiya.run();
kiya.status();
var jack = new Atthelet(100, 0, bottle);
jack.run(); //10 90
jack.run(); // 20 80
jack.run(); //30 70
jack.status();
jack.drink(); //30 80
jack.status();
jack.run(); //40 70
jack.status(); //