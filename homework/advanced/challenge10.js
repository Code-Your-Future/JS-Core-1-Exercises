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
	fill: function () {
		this.volume = 100;
		if (!bottle.empty()) {
		}

		// calling this function should make you bottles volume = 100; 
	},
	drink: function () {
		this.volume -= 10;
		if (!bottle.empty()) {
		}

		// calling this function should decrease your bottles volume by 10;
	},
	empty: function () {
		if (this.volume === 0) {
			return true
			// this function should return true if your bottles volumn = 0
		}
	}
}

var athlete = {
	hydrationLevel: 100,
	distance: 0,
	run: function () {
		if (!this.hydrationLevel <= 0) {
			this.distance += 10;
			this.hydrationLevel -= 10;
			return "He is running";
		}
	},
	drink: function () {
		if (!bottle.empty()) {
			bottle.drink();
			this.hydrationLevel += 10;
		}
	}
};

bottle.fill();
athlete.run();
athlete.run();
athlete.run();
athlete.run();
athlete.run();
athlete.run();
athlete.drink();
athlete.drink();
athlete.run();
athlete.run();



console.log("The hydration Level  for the athele is :" + athlete.hydrationLevel + "\nThe distance he traveled is :" + athlete.distance
	+ '\nThe volume of the bottle : ' + bottle.volume);