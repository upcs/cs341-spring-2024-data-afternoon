$.post("http://localhost:3000/", function(combinedResults, status) {
    // Code to handle the new data...
    // This might involve adding more markers to the map,
    // updating UI elements, or processing the data in other ways.

    // Initialize an empty string to build the HTML content
    let htmlContent = '<h1>Safe Year Round Shelters</h1><ul>';

    // Iterate over each shelter in the safeYearRoundShelters array
    combinedResults[4].forEach(shelter => {
    // Append a list item with the shelter's name and location to the HTML content
    htmlContent += `<li><strong>Name:</strong> ${shelter.name}, <strong>Location:</strong> ${shelter.location}</li>`;
    });

    // Close the unordered list tag
    htmlContent += '</ul>';

    // Set the innerHTML of the element with ID "year-round-shelters" to the built HTML content
    document.getElementById("year-round-shelters").innerHTML = htmlContent;
    
});
