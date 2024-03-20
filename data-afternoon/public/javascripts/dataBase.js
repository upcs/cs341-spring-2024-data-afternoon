
/* this method points a point in the map that corresponds to the sql address*/ 

const customIcon1 = 'images/food.png';
const customIcon2 = 'images/groceries.png';
const customIcon3 = 'images/shelter.png';
const customIcon4 = 'images/health.png';
const customIcon5 = 'images/wifi.png';
//const customIcon6 = 'images/person.png';

let map;
let geocoder;


function findAddress() {
        var location = document.getElementById('locationSearch').value;

        geocoder.geocode({ address: location }, (results, status) => {
                if (status === "OK") {
                        //const gMap = new google.maps.Map(document.getElementById('map'));
                        //map.setCenter(results[0].geometry.location);
                        var marker = new google.maps.Marker({
                                map: map,
                                position: results[0].geometry.location,
                                icon: "images/person.png",
                                title: "You",
                                
                        });
                        
                        alert("Geocode was successful and here is address: " + results[0].geometry.location);
                }
                else {
                        alert("Geocode was not successful for the following reason: " + status + " and here is address: " + location);
                }
        });
        

        if (document.getElementById('iframe').src != 'http://localhost:3000/map.html') {
                document.getElementById('iframe').src = 'map.html';
        }
}



function geocodeAddress(geocoder, resultsMap, addressIn, nameIn, tableNum) 
{
        
        geocoder.geocode({ address: addressIn }, (results, status) => {
                if (status === "OK") 
                {

                        //resultsMap.setCenter(results[0].geometry.location); 

                        // Define an InfoWindow with content based on the marker
                        var infoWindow = new google.maps.InfoWindow({
                        content: `<div><h3>${nameIn}</h3><p>Address: ${addressIn}</p></div>`
                        });

                        // Determine the appropriate icon based on tableNum
                        var iconUrl = tableNum === 0 || tableNum === 3 ? customIcon1 : (tableNum === 1 ? customIcon2 : customIcon3);

                        // Create a marker
                        var marker = new google.maps.Marker({
                                map: resultsMap,
                                position: results[0].geometry.location,
                                icon: {
                                url: iconUrl,
                                scaledSize: new google.maps.Size(25, 25)
                                },
                                title: nameIn, // Tooltip text when hovering over the marker
                                
                        });

                        // Add a click listener to the marker to open the InfoWindow
                        marker.addListener('click', function() {
                                infoWindow.open(resultsMap, marker);
                        });

                        google.maps.event.addListener(marker,'click',function() {
                                map.setZoom(14);
                                map.setCenter(marker.getPosition());
                        });

                } 
                
                else {
                alert("Geocode was not successful for the following reason: " + status + " and here is address: " + addressIn);
                }
                
        });
}



/* send the client the map with pins that provide resources */
$.post("http://localhost:3000/", function(data, status) {

        var center = { lat: 45.5327, lng: -122.7215 }; //center the map around UP area
      
        // Create a new map object
        map = new google.maps.Map(document.getElementById("map"), {
                zoom: 11, // Set the initial zoom level
                center: center, // Set the center of the map
        });

        geocoder = new google.maps.Geocoder(); 

        // Content for the legend
        const legendContent = [
                {name: "Free Food", iconUrl: customIcon1},
                {name: "Free Groceries", iconUrl: customIcon2},
                {name: "Rest Places", iconUrl: customIcon3}
                // Add more legend items here
        ];

        // Get the legend div
        const legend = document.getElementById('legend');

        // Populate the legend with items
        legendContent.forEach(function(item) {

                const div = document.createElement('div'); // Create a div for each legend item for better structure
                const icon = document.createElement('img'); // Create an img element for the icon
                icon.src = item.iconUrl; // Set the src attribute to the icon URL
                icon.className = 'legend-icon'; // Apply a class for optional styling
                div.appendChild(icon); // Add the icon to the div

                const text = document.createTextNode(item.name); // Create a text node for the item name
                div.appendChild(text); // Add the text to the div

                legend.appendChild(div); // Add the div to the legend
        });

        for (let i = 0; i < data.length; i++) //iterate through entire database 
        {
       
                for (let j = 0; j < data[i].length; j++) //iterate through each table
                {

                     var address = JSON.stringify(data[i][j].location); //get current location from table 
                     var name = JSON.stringify(data[i][j].name); //get current name from table

                     geocodeAddress(geocoder, map, address, name, i); //insert the pin with location and name into the map

                }
        } 
})


    
