console.log("\n  First Way  \n")

for(var i=1; i<=30;i++){


      if( i%3===0 && i%5===0 ){
    console.log("fizzbuzz");
  }
  else if(i%3===0){
    console.log("fizz ");
  }
  else if(i%5===0){
    console.log("buzz ");
  }

  else{
    console.log(i);

  }

}
console.log("\n  Secand Way  \n")
for(var i=1; i<=30  ;i++){



     if(i%3===0){
      if(i%5===0){ console.log("fizzBuzz");}else{
    console.log("fizz ");}
  }
  else if(i%5===0){
    console.log("buzz ");
  }

  else{
    console.log(i);

  }

}
