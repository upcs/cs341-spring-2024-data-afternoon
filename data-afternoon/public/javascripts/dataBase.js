
/* this method points a point in the map that corresponds to the sql address*/ 
function geocodeAddress(geocoder, resultsMap, addressIn, nameIn) 
{
          
        geocoder.geocode({ address: addressIn }, (results, status) => {
                if (status === "OK") 
                {

                        resultsMap.setCenter(results[0].geometry.location); 

                        new google.maps.Marker({

                        map: resultsMap,
                        position: results[0].geometry.location, //the point in the map which represents the address
                        label: {
                        fontSize: "8pt",
                        text: nameIn
                        }

                        });
                } 
                else {
                alert("Geocode was not successful for the following reason: " + status + " and here is address: " + addressIn);
                }
        });
}


/* send the client the map with pins that provide resources */
$.post("http://localhost:3000/", function(data, status) {

        var center = { lat: 45.5727, lng: 122.7215 }; //center the map around UP area
      
        // Create a new map object
        var map = new google.maps.Map(document.getElementById("map"), {

        zoom: 10, // Set the initial zoom level
        center: center, // Set the center of the map

        });

        const geocoder = new google.maps.Geocoder(); //create a new geocoder object 


        for (let i = 0; i < data.length; i++) //iterate through entire database 
        {
       
                for (let j = 0; j < data[i].length; j++) //iterate through each table
                {

                     var address = JSON.stringify(data[i][j].location); //get current location from table 
                     var name = JSON.stringify(data[i][j].name); //get current name from table

                     geocodeAddress(geocoder, map, address, name); //insert the pin with location and name into the map

                }
        } 


})


    
