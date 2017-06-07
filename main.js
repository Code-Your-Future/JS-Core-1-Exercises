/*
  We will use this file to add the Code that you will learn in JS-Core Class 1
  Update this file, then run it from the console using the command:

      node class-exercises.js
*/

function Animals( name,family,eatsMeat,sound,numberOfLegs) {
   this.name = name;
   this.family = family;
   this.eatsmeat = eatsmeat;
   this.sound = sound;
   this.numberofLegs= numberofLegs;
   this.says = function() {
     console.log('the ' + this.name + ' says ' + this.sound);
   }
}; 



// var animal = new Animals{
//     name:snake
//     family:reptile
//     eatsmeat:yes
//     sound:hiss7
//     numberofLegs:none
// }; 

var snake = new Animal ('snake', 'reptile', true, 'hiss', 0);
var leopard = new Animal ('leopard', 'nocturnal', true, 'roar', 4);
var cow = new Animal ( 'cow', 'domestic', false,'moooo', 4) ;

snake.says();
leopard.says();
cow.says();



// var animal = {
//     name:leopard
//     family:nocturnal
//     eatsmeat:yes
//     sound:roar
//     numberofLegs:four
// }; 

