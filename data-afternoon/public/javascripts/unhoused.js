/* java scripts for unhoused project */

// Function to display alert message for available location
function mydataFunction() {
  alert("This location is available now! ");
}

// Function to toggle display of dropdown and key elements
function addInfoMap() {
  // Hide dropdown and display key
  document.getElementById("DropDown").style.display = 'none';
  document.getElementById("key").style.display = 'block';
}

// Function to revert display to dropdown
function changeAddInfoBack() {
  // Revert to displaying dropdown and hide key
  document.getElementById("DropDown").style.display = 'block';
  document.getElementById("key").style.display = 'none';
}

// Function to handle search input and navigate to corresponding page
function handleSearch() {
  var searchInput = document.getElementById('searchInput').value.toLowerCase();

  var pageMappings = {
    'map': 'map.html',
    'volunteer': 'volunteer.html',
    'guide': 'guide.html',
    'home': 'home.html'
  }

  if (pageMappings[searchInput]) {
    document.getElementById('iframe').src = pageMappings[searchInput];
  } else {
    alert('Page not found.');
  }
}

// Function to toggle language display
function toggleLanguage(lang) {
  const enTabs = document.querySelectorAll('.en-tab');
  const esTabs = document.querySelectorAll('.es-tab');

  if (lang === 'es') {
    enTabs.forEach(tab => tab.style.display = 'none');
    esTabs.forEach(tab => tab.style.display = 'block');
  } else {
    enTabs.forEach(tab => tab.style.display = 'block');
    esTabs.forEach(tab => tab.style.display = 'none');
  }

  localStorage.setItem('selectedLanguage', lang);

  var ifram = document.getElementById('iframe');
  if (ifram && ifram.src.includes('guide.html')) {
    ifram.src = ifram.src;
  }
}

// Check if geolocation is available
if ("geolocation" in navigator) {
  // Get current position
  navigator.geolocation.getCurrentPosition(function(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    
    // Update user interface with location information
    updateUserInterface(latitude, longitude);
  });
} else {
  console.log("Geolocation is not available");
}

// Function to update user interface with location information
function updateUserInterface(lat, long) {
  // Get zip code using latitude and longitude
  getZipCode(lat, long, function(zipCode) {
    // Display zip code on user interface
    document.getElementById('user-location').textContent = `Zip Code: ${zipCode}`;
  });
}

// Function to retrieve zip code from latitude and longitude
function getZipCode(lat, long, callback) {
  const geocoder = new google.maps.Geocoder();
  const latlng = { lat: parseFloat(lat), lng: parseFloat(long) };
  geocoder.geocode({ location: latlng }, function(results, status) {
    if (status === 'OK') {
      if (results[0]) {
        const addressComponents = results[0].address_components;
        const zipCodeComponent = addressComponents.find(component => component.types[0] === 'postal_code');
        if (zipCodeComponent) {
          callback(zipCodeComponent.long_name);
        } else {
          console.log('No zip code found');
        }
      } else {
        console.log('No results found');
      }
    } else {
      console.log('Geocoder failed due to: ' + status);
    }
  });
}

// Export functions for external use
module.exports = { mydataFunction, addInfoMap, changeAddInfoBack, handleSearch, toggleLanguage, updateUserInterface, getZipCode };