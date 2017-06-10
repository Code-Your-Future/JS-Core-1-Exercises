
var bottle = {
	volume: 0,
	fill: function(){
	 	// calling this function should make you bottles volume = 100;
			this.volume=100
   	},
	drink: function(){
		// calling this function should decrease your bottles volume by 10;
		this.volume=this.volume-10;
 	},
	empty: function(){
		// this function should return true if your bottles volumn = 0
		if(this.volume===0){
 		}
	}
}
bottle.fill();
bottle.drink();
bottle.drink();
bottle.drink();


if(!bottle.empty()){
	console.log('bottles volume = ' + bottle.volume);
}
