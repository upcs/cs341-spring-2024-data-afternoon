$(document).ready(function() {
    updatePendingRequests();
});
/* this function gets data from the client */
function submitFunction() 
{
    var name = document.getElementById("name").value; //get the name from the text box 
    var address = document.getElementById("address").value; //get the address from the text box 

        /* send this data to the server (database) */
        $.post("http://localhost:3000/newClientData", { Name: name, Address: address}, function(response) { 
            if (response && response.success) {
                updatePendingRequests();
            } else {
                // Handle the error
                console.error("Error submitting data");
            }
        })
}         
 

$.post("http://localhost:3000/", function(combinedResults, status) {
    // Code to handle the new data...
    // This might involve adding more markers to the map,
    // updating UI elements, or processing the data in other ways.

    // Initialize an empty string to build the HTML content
    let htmlContent = '<h1> Pending Requests </h1><div class="service-container">';

    // Iterate over each shelter in the safeYearRoundShelters array
    combinedResults[8].forEach(shelter => {
    // Append a list item with the shelter's name and location to the HTML content
    htmlContent += `<div class="service-box"><strong>Name:</strong> ${shelter.name}<br><strong>Location:</strong> ${shelter.location}</div>`;
});

    // Close the unordered list tag
    htmlContent += '</div>';

    // Set the innerHTML of the element with ID "year-round-shelters" to the built HTML content
    document.getElementById("submissionForm").innerHTML = htmlContent;
    
});

function updatePendingRequests() {
    $.post("http://localhost:3000/", function(combinedResults, status) {
        let htmlContent = '<h1> Pending Requests </h1><div class="service-container">';
        combinedResults[8].forEach(shelter => {
            htmlContent += `<div class="service-box"><strong>Name:</strong> ${shelter.name}<br><strong>Location:</strong> ${shelter.location}</div>`;
        });
        htmlContent += '</div>';
        document.getElementById("submissionForm").innerHTML = htmlContent;
    });
}

