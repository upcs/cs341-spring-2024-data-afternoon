const localurl = "http://localhost:3000/"
const deployurl = "https://unhoused-414004.uw.r.appspot.com/"


$(document).ready(function() {
    updatePendingRequests();
});


function submitFunction() {
    var name = document.getElementById("name").value; // Get the name from the text box 
    var address = document.getElementById("address").value; // Get the address from the text box 

    var sumbitButton = document.getElementById('submitButton');

    
    if (submitButton.disabled) {
        // If the button is disabled, show a cooldown message and return early
        displayError('You can only submit once per day. Please wait until the cooldown period expires.');
        return; // Stop execution here if the button is disabled
    }

    restoreCooldown(sumbitButton);
    addCooldown(sumbitButton, 86400000); //user may only submit one response per day (86400000 milisec = 24 hours)
    if (submitButton.disabled) {
        displayError('You can only submit once per day. Please wait until the cooldown period expires.');
        return; // Stop execution
    }
    
    $.post('http://localhost:3000/check-inappropriate', { name: name, address: address}, function(response) {

   
        //go to check-inappropraite endpoint in check-inappropriate.js to validate name and address
        if (response.success) {
            displaySuccess('Submission was successful!');
        } else {
            displayError('Failed to submit: ' + response.error);
        }
    }).fail(function() {
        displayError('Failed to connect to the server.');
    });

}

// Function to disable and enable the button based on cooldown
function addCooldown(button, cooldownTime) {
    const cooldownKey = 'buttonCooldown';

    // Disable the button
    button.disabled = true;

    // Record the end time of the cooldown in localStorage
    const cooldownEnd = new Date().getTime() + cooldownTime;
    localStorage.setItem(cooldownKey, cooldownEnd);

    // After cooldownTime milliseconds, enable the button again
    setTimeout(() => {
        button.disabled = false;
        localStorage.removeItem(cooldownKey); // Clear cooldown from localStorage
    }, cooldownTime);
}

// Function to restore cooldown state when page loads
function restoreCooldown(button) {
    const cooldownKey = 'buttonCooldown';
    const now = new Date().getTime();
    const storedCooldownEnd = parseInt(localStorage.getItem(cooldownKey), 10);

    if (storedCooldownEnd && storedCooldownEnd > now) {
        // Calculate the remaining cooldown time
        const remainingTime = storedCooldownEnd - now;

        // Disable button and set timeout to re-enable it after remaining time
        button.disabled = true;
        setTimeout(() => {
            button.disabled = false;
            localStorage.removeItem(cooldownKey); // Clear cooldown from localStorage
        }, remainingTime);
    }
}

function resetMessageDisplay() {
    var messageElement = document.getElementById('messageDisplay');
    messageElement.innerText = ''; // Clear prev message
    messageElement.style.display = 'none'; // Hide the element
}

// Function to display a success message
function displaySuccess(message) {
    var messageElement = document.getElementById('messageDisplay');
    messageElement.innerText = message;
    messageElement.style.color = 'green';
    messageElement.style.display = 'block'; 
    setTimeout(resetMessageDisplay, 5000); //refresh message display
}

// Function to display an error message
function displayError(message) {
    var messageElement = document.getElementById('messageDisplay');
    messageElement.innerText = message;
    messageElement.style.color = 'red'; 
    messageElement.style.display = 'block'; 
    setTimeout(resetMessageDisplay, 5000); //refresh message display
}


 
/*
//$.post(deployrul, function(combinedResults, status) {
    $.post(localurl, function(combinedResults, status) {
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
  //  $.post(deployrul, function(combinedResults, status) {
    $.post(localurl, function(combinedResults, status) {  
        let htmlContent = '<h1> Pending Requests </h1><div class="service-container">';
        combinedResults[8].forEach(shelter => {
            htmlContent += `<div class="service-box"><strong>Name:</strong> ${shelter.name}<br><strong>Location:</strong> ${shelter.location}</div>`;
        });
        htmlContent += '</div>';
        document.getElementById("submissionForm").innerHTML = htmlContent;
    });
}
*/
//module.exports = { submitFunction, updatePendingRequests };
