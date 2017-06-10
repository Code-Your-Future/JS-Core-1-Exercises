var bill = [7.99, 6.99, 14.99, 4.99];
var numberOfFriends = 4;

function calcalute(bill,tips){
  total=0;
  for(var i=0;i<bill.length;i++){
    total+=bill[i];
  }

  tip=(tips*total)/100;
  total=total+tip;
  eachone=(total/4);

  console.log(eachone);
}

calcalute(bill,10);
