const localurl = "http://localhost:3000/"
const deployurl = "https://unhoused-414004.uw.r.appspot.com/"
$.post(localurl, function(combinedResults, status) {
    // Initialize an empty string to build the HTML content
    let htmlContent = '<h1>Safe Rest Villages</h1><div class="service-container">';

    // Iterate over each shelter in the safeYearRoundShelters array
    combinedResults[2].forEach(shelter => {
    // Append a list item with the shelter's name and location to the HTML content
    htmlContent += `<div class="service-box"><strong>Name:</strong> ${shelter.name}<br><strong>Location:</strong> ${shelter.location}
    <br><strong>Total Sleep Units:</strong> ${shelter.num_sleep_units}</div>`;
});

    // Close the unordered list tag
    htmlContent += '</div>';

    // Set the innerHTML of the element with ID "year-round-shelters" to the built HTML content
    document.getElementById("rest-villages").innerHTML = htmlContent;
    
});
