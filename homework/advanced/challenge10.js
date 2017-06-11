/*Challenge 8: Athlete

Now we are going to create an athlete object that can drink from the bottle we created 
in the last challenge.

Our athlete should hold values for their hydration level and the distance 
they have travelled. 

They should be able to run and drink.

When they run their hydration level should decrease while their distance should 
increase

Our athlete should not be able to run if their hydration level is less than or equal to 0.

When our athlete drinks their hydration should increase.

--EXTRA--

Really our athlete should only be able to drink if the bottles volume is more than 0 - see
if you can add a conditional to your athletes drink function that only allows them
to drink if your bottle is not empty.
Tip: you will need to research node require


*/  
var Athlete = {
  hydrationLevel: 100,
  distanceTravelled: 0,
  drink: function(bottle) {
    this.hydrationLevel = this.hydrationLevel + bottle.volume;
    
  },
  run: function(distance) {
  
    if (this.hydrationLevel <= 0) {
      return;
    }
 
    this.hydrationLevel = this.hydrationLevel - 10;
    this.distanceTravelled = this.distanceTravelled + distance;

  }
}

Athlete.run(20);
console.log(Athlete.distanceTravelled);
console.log(Athlete.hydrationLevel);
Athlete.drink(bottle);
console.log(Athlete.distanceTravelled);
console.log(Athlete.hydrationLevel);