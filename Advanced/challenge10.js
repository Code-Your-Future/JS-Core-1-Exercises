
var bottle = {
	volume: 0,
	fill: function(){
	 	// calling this function should make you bottles volume = 100;
			this.volume=100
   	},
	drink: function(){
		// calling this function should decrease your bottles volume by 10;
		this.volume-=10;
 	},
	empty: function(){
		// this function should return true if your bottles volumn = 0
		if(this.volume===0){
 		}
	}
}
bottle.fill();



if(!bottle.empty()){
	console.log('bottles volume = ' + bottle.volume);
}


var athlete = {
		distance:0,
		hydration:100,
		run:function(){
			if(this.hydration>0){
				this.distance+=10;
				this.hydration-=10;
			}else{
				var manner ="hydration is zero you can't continue drink to continue";
				console.log(manner);
			}


		},
		drink:function(){
			if(bottle.volume>0){
				bottle.drink();
				this.hydration+=10;
			}else{
				var mannerTwo ="The bottle is empty plz fill it !! to allow you to drink";
					console.log(mannerTwo);
			}


		}
}
for(var i=11;i>0;i--){
 	athlete.run();
}
for(var i=11;i>0;i--){
 	athlete.drink();
}
for(var i=10;i>0;i--){
 	athlete.run();
}
bottle.fill();

for(var i=5;i>0;i--){
 	athlete.drink();
}
console.log('athlete hydration = ' + athlete.hydration);
console.log('bottles volume = ' + bottle.volume);
console.log('athlete distance = ' + athlete.distance);
