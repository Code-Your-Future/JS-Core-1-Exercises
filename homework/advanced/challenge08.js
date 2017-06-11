/* Challenge 8: Paying back a friend

Nadia, Suzie and Katrina live together. They agreed to buy a kettle and three
mugs, and split the cost.

Nadia went to the shop and bought everything. Write a function to help her
figure out how much Suzie and Katrina owe her.

The function should accept the price of a kettle and the price of one of the
mugs, then return the value Suzie owes.

Test your function with different prices to see if it works.
*/
function suzieOwes(priceOfMug, priceOfKettle) {
    // var totalPriceOfMug = priceOfMug*3;

     var totalPriceOfItems = (priceOfMug*3)+priceOfKettle;
     
      var priceEachPay = totalPriceOfItems/3;
      return priceEachPay;
}
        console.log(suzieOwes(2, 3));
  

