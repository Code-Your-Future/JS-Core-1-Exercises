

//The map() method creates a new array with the results of calling 
//a provided function on every element in the calling array.

// var numbers = [1, 5, 10, 15];
// var doubles = numbers.map(function(x) {
//    return x * 2;}


var animals = [
  { name: 'Fluffykins', species: 'rabbit' },
  { name: 'Caro',       species: 'dog' },
  { name: 'Hamilton',   species: 'dog' },
  { name: 'Harold',     species: 'fish' },
  { name: 'Ursula',     species: 'cat' },
  { name: 'Jimmy',      species: 'fish' }
]

var names = []
for (var i = 0; i < animals.length; i++) {
  names.push(animals[i].name + ' the ' + animals[i].name)
}
console.log(names);

var names = animals.map(function(x) { return x.name + ' the ' + x.species});
console.log(names);

var names = animals.forEach(function(x) { return x.name + ' the ' + x.species});
console.log(names);

var names = animals.forEach(function(x) { console.log( x.name + ' the ' + x.species)});
