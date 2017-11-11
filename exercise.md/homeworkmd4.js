/*a function which takes a city name and checks whether it is one of the 
   Code Your Future cities (London, Glasgow, Manchester). 
   If it is one of the CYF cities, log a success message*/


   var cyfCities = ["London", "Manchester", "Glasgow"]
   
   
   
   
   function searchCyfCity(cityName) {
       if (cityName == 'London' || cityName == "Manchester" || cityName == "Glasgow") {

           console.log("Well done! there is CYF in " + cityName);
       } 
       
       else {
           console.log("There is no CYF in " + cityName + ", Please insert city");
       }
   }

   searchCyfCity("California");
   
   
   
   /*.......................second method.......................*/
   
   
   function findCyfCity(cityName) {
       for (var j = 0; j < cyfCities.length; j++) {
   
           if (cityName === cyfCities[j]) {
            console.log("Well done! there is CYF in " + cityName);
           }
   
           break;
   
       }

       if (cityName !== cyfCities[j]) {
         console.log("There is no CYF in " + cityName + ", please insert city");
       }

   }
   
   findCyfCity('London');
   findCyfCity('Helsinki');
   findCyfCity('Leeds');
   
   
