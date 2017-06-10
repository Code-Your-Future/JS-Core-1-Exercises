var bill = [7.99, 6.99, 14.99, 4.99];
var numberOfFriends = 4;

function calcalute(bill,numberOfFriends){
  total=0;
  for(var i=0;i<bill.length;i++){
    total+=bill[i];
  }

  // tip=(tips*total)/100;
  // total=total+tip;
  eachone=(total/numberOfFriends);
  console.log(eachone);
  return eachone;


}

calcalute(bill,numberOfFriends);
