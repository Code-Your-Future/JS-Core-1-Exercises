for(var i=1; i <=100; i=i+1){
    
    if (i%2===0){
        console.log(i)
    
    }
    if (i%3===0){
        console.log("fizz")
    }if (i%5===0){
        console.log("buzz")
    }if (i%4===0){
        console.log("fizz")
    }if (i%3===0){
        if (i%5===0){
            console.log("fizzbuzz")
        }
    }
}