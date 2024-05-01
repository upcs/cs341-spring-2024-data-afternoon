
const customIcon1 = 'images/food.png';
const customIcon2 = 'images/groceries.png';
const customIcon3 = 'images/shelter.png';
const customIcon4 = 'images/health.png';
const customIcon5 = 'images/wifi.png';
const customIcon6 = 'images/person.png';
const localurl = "http://localhost:3000/"
const deployurl = "https://unhoused-414004.uw.r.appspot.com/"



const customIcon7 = 'images/volunteer.png'; //change this icon its hard to see on the map 

var myMarkers = [];
var you;
var nearby = [];
function distance_miles(item) {
        var R = 3958.5; //the radius of the earth
        var rlat1 = item.position.lat() * (Math.PI/180); //make the degrees radians
        var rlat2 = you.position.lat() * (Math.PI/180); //do the same thing marker 2
        var difference_lat = rlat2-rlat1;
        var difference_lng = (you.position.lng() - item.position.lng()) * (Math.PI/180);
        
        var selected_dis = document.getElementById("miles").value;
        var selected_type = document.getElementById("type").value;

        var distance = 2 * R * Math.asin(Math.sqrt(Math.sin(difference_lat/2)*Math.sin(difference_lat/2)+Math.cos(rlat1)*Math.cos(rlat2)*Math.sin(difference_lng/2)*Math.sin(difference_lng/2)));
        if (distance < selected_dis) {
                if (selected_type == "Any") {
                        nearby.push(item);
                }
                else {
                        var title = item.title;
                        var trim_title = title.split(' ').slice(0,2).join(' ');
                        if (trim_title == selected_type) {
                                nearby.push(item);
                        }
                }
        }
}

function addToNear(item) {
        const near = document.getElementById('near');
        const div = document.createElement('div');
        const para = document.createTextNode(item.title );
        div.appendChild(para);
        near.appendChild(div); 
}


function initAutocomplete() {
        /* send the client the map with pins that provide resources */

      //  $.post(deployrul, function(data, status) {

        $.post(deployurl, function(data, status) {

        var center = { lat: 45.5327, lng: -122.7215 }; //center the map around UP area

        // Create a new map object
        map = new google.maps.Map(document.getElementById("map"), {
                zoom: 11, // Set the initial zoom level
                center: center, // Set the center of the map
        });

        var geocoder = new google.maps.Geocoder(); 

        // Content for the legend
        const legendContent = [
                {name: "Free Food", iconUrl: customIcon1},
                {name: "Free Groceries", iconUrl: customIcon2},
                {name: "Rest Places", iconUrl: customIcon3},
                {name: "Free Healthcare", iconUrl: customIcon4},
                {name: "Free Wifi", iconUrl: customIcon5},
                {name: "Volunteer", iconUrl: customIcon7},
                {name: "You", iconUrl: customIcon6}
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
            if (data[i] != null) { //error handling for unit tests
                for (let j = 0; j < data[i].length; j++) //iterate through each table
                {

                var address = JSON.stringify(data[i][j].location); //get current location from table 
                var name = JSON.stringify(data[i][j].name); //get current name from table

                if (i != 8)
                {
                        geocodeAddress(geocoder, address, name, i); //insert the pin with location and name into the map
                }


                }
	    }
        } 

        })
        // Create the search box and link it to the UI element.
        const input = document.getElementById("pac-input");
        const searchBox = new google.maps.places.SearchBox(input);
      
        let markers = [];
      
        // Listen for the event fired when the user selects a prediction and retrieve
        // more details for that place.
        searchBox.addListener("places_changed", () => {
          const places = searchBox.getPlaces();
      
          if (places.length == 0) {
            return;
          }
      
          // Clear out the old markers.
          markers.forEach((marker) => {
            marker.setMap(null);
          });
          markers = [];
      
          // For each place, get the icon, name and location.
          const bounds = new google.maps.LatLngBounds();
      
          places.forEach((place) => {
            if (!place.geometry || !place.geometry.location) {
              console.log("Returned place contains no geometry");
              return;
            }
      
            const icon = {
              url: customIcon6,
              size: new google.maps.Size(71, 71),
              origin: new google.maps.Point(0, 0),
              anchor: new google.maps.Point(17, 34),
              scaledSize: new google.maps.Size(25, 25),
            };

            // Create a marker for each place.
            markers.push(
              you = new google.maps.Marker({
                map,
                icon,
                title: place.name,
                position: place.geometry.location,
              }),
            );

            //set the zoom and the center to the searched posistion
            map.setZoom(14);
            map.setCenter(place.geometry.location);

            nearby = [];
            myMarkers.forEach(distance_miles);

            const near = document.getElementById('near');
            near.innerHTML = "";
            nearby.forEach(addToNear);
            

            if (place.geometry.viewport) {
              // Only geocodes have viewport.
              bounds.union(place.geometry.viewport);
            } else {
              bounds.extend(place.geometry.location);
            }
          });
        });
      }
      
      window.initAutocomplete = initAutocomplete;

      

// function findAddress() {
//         var location = document.getElementById('locationSearch').value;
//         var geocoder = new google.maps.Geocoder(); 
      
//         geocoder.geocode({ address: location }, (results, status) => {
//                 if (status === "OK") {
//                         //var myMap = document.getElementById('map');
//                         // new google.maps.Map(document.getElementById('map'), {
//                         //        center: { lat: 32, lng: -124},
//                         //        zoom: 15, 
//                         // });
//                         // if (map =! null) {
//                         //         alert("There is an element");
//                         //         console.log(map);
//                         // }
//                         //map.setCenter(results[0].geometry.location);
//                         // let newLat = 45;
//                         // let newLng = -124;
//                         // map.setCenter({
//                         //         lat : newLat,
//                         //         lng : newLng
//                         // });
//                         alert("Geocode was successful and here is address: " + results[0].geometry.location);
//                 }
//                 else {
//                         alert("Geocode was not successful for the following reason: " + status + " and here is address: " + location);
//                 }
//         });
        
//         if (document.getElementById('iframe').src != 'http://localhost:3000/map.html') {
//                 document.getElementById('iframe').src = 'map.html';
//         }
// }

function geocodeAddress(geocoder, addressIn, nameIn, tableNum) 
{
        
        geocoder.geocode({ address: addressIn }, (results, status) => {
                if (status === "OK") 
                {

                        //resultsMap.setCenter(results[0].geometry.location); 

                        

                        // Determine the appropriate icon based on tableNum

                        if (tableNum === 0 || tableNum === 3) {
                                iconUrl = customIcon1;
                                title = "Free Food";
                            } else if (tableNum === 1) {
                                iconUrl = customIcon2;
                                title = "Free Groceries"
                            } else if (tableNum === 5) {
                                iconUrl = customIcon5;
                                title = "Free Wifi"
                            } else if (tableNum == 6) {
                                iconUrl = customIcon4;
                                title = "Free Healthcare"
                            } else if (tableNum == 7) {
                                iconUrl = customIcon7;
                                title = "Volunteer"

                            } else {
                                iconUrl = customIcon3;
                                title = "Rest Places"
                            }

                            // Define an InfoWindow with content based on the marker
                        var infoWindow = new google.maps.InfoWindow({
                                content: `<div><h2>${title}<h2><h3>${nameIn}</h3><p>Address: ${addressIn}</p></div>`
                        });

                        // Create a marker
                        var marker = new google.maps.Marker({
                                map: map,
                                position: results[0].geometry.location,
                                icon: {
                                url: iconUrl,
                                scaledSize: new google.maps.Size(25, 25)
                                },
                                title: title + " " + nameIn, // Tooltip text when hovering over the marker
                                
                        });

                        //array of all markers??
                        myMarkers.push(marker);

                        // Add a click listener to the marker to open the InfoWindow
                        marker.addListener('click', function() {
                                infoWindow.open(map, marker);
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

