function convert(number){
  var numb="";
      for(i=1;i<=number;i++){
        if (i%2===0) {
           numb+="0";
        }else{
          numb+="1";
        }
      }
      console.log(numb)

}
convert(5);
