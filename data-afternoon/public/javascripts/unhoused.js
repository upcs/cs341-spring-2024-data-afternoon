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

module.exports = { mydataFunction };
