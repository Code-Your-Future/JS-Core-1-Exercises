/*a function which takes a city name and checks whether it is one of the 
   Code Your Future cities (London, Glasgow, Manchester). 
   If it is one of the CYF cities, log a success message*/





function findCyfCity(cityName) {

    var cyfCities = ["London", "Manchester", "Glasgow"]
    var sum = 0;
    for (var j = 0; j < cyfCities.length; j++) {
        for (var k = 0; k < cityName.length; k++) {

            if (cityName[k] === cyfCities[j]) {
                sum++;
            }
        }


    }

    if (sum === cyfCities.length) {
        console.log("All of them are cyf city");
    } else if (sum > 0) {
        console.log("Some of them are cyf cities");
    } else {
        console.log("None of them are cyf cities");
    }

}

findCyfCity(["London", "Manchester", "Glasgow"]);
findCyfCity(["London", "Alaska", "Glasgow"]);
findCyfCity(["Helsinki", "Addisababa", "Istanbul", "Liverpool"]);
