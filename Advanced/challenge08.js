function Splitstuff(ketPrice,mugPrice){

var Allprice=ketPrice+(3*mugPrice);
  var eachOne=Allprice/3;
  var owe=eachOne*2;
  return owe;
}
var SuzieOwe=Splitstuff(6,31);
console.log(SuzieOwe);
