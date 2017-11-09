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

var bottle = {
	volume: 0,
	fill: function(){
	 	// calling this function should make you bottles volume = 100;
	 	this.volume = 100; 
	},
	drink: function(){
		// calling this function should decrease your bottles volume by 10;
		this.volume -= 10;
	},
	empty: function(){
		// this function should return true if your bottles volumn = 0
		if(this.volume === 0) {
			return true;
		} else {
			return false;
		}
	},
	doubleDrink: function(vol){
		this.volume -= vol;
	}
}

var athlete = {
	hydroLevel: 100,
	distance: 0,
	run: function(){
		if(this.hydroLevel <= 0){
			return "You can't run!";
		} else {
			this.hydroLevel -= 10;
			this.distance += 10;
		}
	},
	drink: function(){
		if(bottle.volume > 0){
			this.hydroLevel += 10;
		} else {
			return "You have to fill the bottle first!";
		}
	}
}

athlete.run();
athlete.run();
athlete.run();
athlete.run();
athlete.run();
athlete.run();
athlete.run();
athlete.run();
athlete.run();
athlete.run();
athlete.run();
athlete.run();
athlete.run();
athlete.run();
athlete.run();
athlete.run();
athlete.run();
console.log(athlete.run());
console.log("HydroLevel is: " + athlete.hydroLevel + " " + "Distance is: " + athlete.distance);
console.log(athlete.drink());

