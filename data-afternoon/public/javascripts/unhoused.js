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

module.exports = { mydataFunction };

