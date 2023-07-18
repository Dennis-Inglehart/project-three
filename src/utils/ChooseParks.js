export default function ChooseParks()
{
  return(
<div class="dropdown">
<div id="stateDropdown" class="dropdown-content">
<button onclick="dropDownFunction()" class="dropbtn">Choose State</button>
    <a href="#">State 1</a>
    <a href="#">State 2</a>
    <a href="#">State 3</a>
  </div>
</div>
  );
}

/*
---Function to display drop down menu. Will be placed in js file---

function dropDownFunction() {
  document.getElementById("stateDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
*/
