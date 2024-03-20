/* java scripts for unhoused project */


function mydataFunction() {
  alert("This location is available now! ")
}

function addInfoMap() {
  //get rid of dropdown and add in key
  document.getElementById("DropDown").style.display = 'none';
  document.getElementById("key").style.display = 'block';
}

function changeAddInfoBack() {
  //temporary since we do not have things to put 
  //in additional info for other tabs
  document.getElementById("DropDown").style.display = 'block';
  document.getElementById("key").style.display = 'none';
}

function handleSearch() {
  var searchInput = document.getElementById('searchInput').value.toLowerCase();

  var pageMappings = {
    'map': 'https://www.google.com/maps/d/u/0/embed?mid=1BLVgiQyHdq8C0BkwPmqlToYT_t_ox6c&ehbc=2E312F',
    'volunteer': 'volunteer.html',
    'guide': 'guide.html',
    'home': 'home.html'
  }

  if (pageMappings[searchInput]) {
    document.getElementById('iframe').src = pageMappings[searchInput];
  }

  else{
    alert('Page not found.');
  }
}

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

if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(function(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    
    // Now latitude and longitude are available to use
    updateUserInterface(latitude, longitude);
  });
} else {
  console.log("Geolocation is not available");
}

function updateUserInterface(lat, long) {
  getZipCode(lat, long, function(zipCode) {
    document.getElementById('user-location').textContent = `Zip Code: ${zipCode}`;
  });
}

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

module.exports = { mydataFunction, addInfoMap, changeAddInfoBack, handleSearch };

