var name="my name is khaled el ali samer sami yoowiers";
var nameTwo="goodbye";
var nameThree="nodegirls";
var namefour="how are you today? ";

var voweli ="i",vowelo="o",vowely="y",vowele="e";
function shortcut(x){
  var newname="";
 for(var i=0; i<x.length;i++){
   if(x[i]==="i"||x[i]==="o"||x[i]==="e"||x[i]==="a"){
     newname+="";
   }else{
     newname+=x[i];
   }
 }
 console.log(newname);
}

shortcut("\n"+name +"\n");
shortcut("\n"+nameTwo+"\n");
shortcut("\n"+nameThree+"\n");
shortcut("\n"+namefour+"\n");
