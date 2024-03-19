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
<<<<<<< Updated upstream
=======

  localStorage.setItem('selectedLanguage', lang);

  var ifram = document.getElementById('iframe');
  if (ifram && ifram.src.includes('guide.html')) {
    ifram.src = ifram.src;
  }

>>>>>>> Stashed changes
}
module.exports = { mydataFunction, addInfoMap, changeAddInfoBack, handleSearch };

