

for (var z=1; z<=100; z++) {

        if (z % 3 == 0 && z % 5 == 0) {
            console.log("Fizz Buzz"); 
        }
          else if (z % 3==0) {
            console.log("Fizz");
        }
        else if(z % 5 ==0) {
            console.log("Buzz");
        }
        else {
            console.log(z);
        }
    }  