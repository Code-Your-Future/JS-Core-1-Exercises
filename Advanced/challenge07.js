var bill = [7.99, 6.99, 14.99, 4.99];
var numberOfFriends = 4;
var tips=10;
function calcalute(bill,numberOfFriends,tips){
  total=0;
  for(var i=0;i<bill.length;i++){
    total+=bill[i];
  }

  totalTip=(tips*total)/100;
  total+=totalTip;
  eachone=(total/numberOfFriends);
  console.log(eachone);
  return eachone;
}

calcalute(bill,numberOfFriends,tips);
