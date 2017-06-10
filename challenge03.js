var tools= ["one","two","three","needle"];
function findNeedle(x){
for(var i=0;i<x.length;i++){
  if(tools[i]==="needle"){
    console.log(i);
  }}}

findNeedle("Found the needle at position "+tools);
