var bank={
  accountProperty:[
    {
      name:"ali",
      balance:500
    },{
      name:"ahmad",
      balance:300
    }
  ],addto:function(name,plus){

    for(var i=0 ; i<bank.accountProperty.length;i++){
      if(name===bank.accountProperty[i].name){
        bank.accountProperty[i].balance+=plus;
      }
    }
  },Reduced:function(name,reduce){
    if(name===accountProperty[i].name){
      accountProperty[i].balance-=reduce;
    }
  }
  ,myTotal:function(){

        var total=0;
        var averge=0;
         for(var i=0; i<bank.accountProperty.length;i++){
           total+=bank.accountProperty[i].balance;
         }
         averge=total/bank.accountProperty.length;
         console.log("The total is " + total   );
  },myAaverge:function(){

        var total=0;
       var averge=0;
        for(var i=0; i<bank.accountProperty.length;i++){
          total+=bank.accountProperty[i].balance;
        }
        averge=total/bank.accountProperty.length;
        console.log(  " \n The average is "+averge );
  },myHighest:function(){

    var highest=0;

    for(var i=0;i<bank.accountProperty.length;i++){
        if(highest<bank.accountProperty[i].balance){
          highest=bank.accountProperty[i].balance;
        }
    }


    console.log(highest);
  }
}

// function total(){
//
//   var total=0;
//   var averge=0;
//    for(var i=0; i<bank.accountProperty.length;i++){
//      total+=bank.accountProperty[i].balance;
//    }
//    averge=total/bank.accountProperty.length;
//    console.log("The total is " + total + " \n The average is "+averge );
// }

// function highest(){
//
//   var highest=0;
//
//   for(var i=0;i<bank.accountProperty.length;i++){
//       if(highest<bank.accountProperty[i].balance){
//         highest=bank.accountProperty[i].balance;
//       }
//   }
//
//
//   console.log(highest);
// }
bank.myTotal();
bank.myAaverge();
bank.myHighest();
bank.addto("ahmad",5000);
console.log(bank.accountProperty[1].balance);
bank.myTotal();
bank.myAaverge();
bank.myHighest();
