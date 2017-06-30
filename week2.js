// var animals = ["tiger", "puppy", "snake", "llama"];

// for (var i = 0; i < animals.length; i++) {

//     console.log(animals[i] );
// }

// var j = "";
//  animals = ["tiger", "puppy", "snake", "llama"];

// for (var i = 0; i < animals.length; i++) {

//     j += " " + animals[i];
//   console.log(j );

//    for ( var k = 0; k < animals.length; k++){
//        j += " " + animals[k]
//    }
  
// }


// var j="";
// var nationality=["ethiopian", "spain", "mexico", "yemen", "kenya", "sudan"];
// for (i = 0; i < nationality.length; i++ ){
// j += " "+ nationality[i];
// }
// console.log(j);


// var myLaptop = {
    
//     firstname: "CYF",
//     name: "lenovo",
//     color: "black",
//     age: 3,
//     free: false,
//     owner: {
//         firstName: "khaled",
//         lastName: "zaki",
//         family: {
//             fisrtname: "yaseen",
//         }

//     }
// }

// console.lo("My name is " + myLaptop.firstname + ' '+ myLaptop.name + " I have a " + myLaptop.color + " color" );
// console.log(myLaptop.owner.family.fisrtname)






//splice

// var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];

// myFish.splice(1, 0, 'khaled'); // insert 'drum' at 2-index position
// // myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"]

// console.log(myFish);

// myFish.splice(2, 1); // remove 1 item at 2-index position (that is, "drum")
// // myFish is ["angel", "clown", "mandarin", "sturgeon"]





// slice 
var a = ['zero', 'one', 'two', 'three'];
var sliced = a.slice(1);

console.log(a);      // ['zero', 'one', 'two', 'three']
console.log(sliced); // ['one', 'two']