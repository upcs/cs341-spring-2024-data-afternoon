const localurl = "http://localhost:3000/"
const deployurl = "https://unhoused-414004.uw.r.appspot.com/"
$.post(deployurl, function(combinedResults, status) {
    // Code to handle the new data...
    // This might involve adding more markers to the map,
    // updating UI elements, or processing the data in other ways.

    // Initialize an empty string to build the HTML content
    let htmlContent = '<h1>Free Wifi</h1><div class="service-container">';

    // Iterate over each shelter in the safeYearRoundShelters array
    combinedResults[5].forEach(shelter => {
    // Append a list item with the shelter's name and location to the HTML content


    htmlContent += `<div class="service-box"><strong>Name:</strong> ${shelter.name}<br><strong>Location:</strong> ${shelter.location}
    <br><strong>Contact Info:</strong> ${shelter.contact_info}</div>`;


});

    // Close the unordered list tag
    htmlContent += '</div>';

    // Set the innerHTML of the element with ID "year-round-shelters" to the built HTML content
    document.getElementById("free-wifi").innerHTML = htmlContent;
    
});
