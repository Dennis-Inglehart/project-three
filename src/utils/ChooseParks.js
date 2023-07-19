export default function ChooseParks()
{
  return(
<div class="dropdown">
<button onclick="dropDownFunction()" class="dropbtn">Choose State</button>
<div id="myDropdown" class="dropdown-content">
    <a id="#">Alabama</a>
    <a id="#">Alaska</a>
    <a id="#">Arizona</a>
    <a id='#'>Arkansas</a>
    <a id='#'>California</a>
    <a id='#'>Colorado</a>
    <a id='#'>Connecticut</a>
    <a id='#'>Delaware</a>
    <a id='#'>Florida</a>
    <a id='#'>Georgia</a>
    <a id='#'>Hawaii</a>
    <a id='#'>Idaho</a>
    <a id='#'>Illinois</a>
    <a id='#'>Indiana</a>
    <a id='#'>Iowa</a>
    <a id='#'>Kansas</a>
    <a id='#'>Kentucky</a>
    <a id='#'>Louisiana</a>
    <a id='#'>Maine</a>
    <a id='#'>Maryland</a>
    <a id='#'>Massachusetts</a>
    <a id='#'>Michigan!</a>
    <a id='#'>Minnesota</a>
    <a id='#'>Mississippi</a>
    <a id='#'>Missouri</a>
    <a id='#'>Montana</a>
    <a id='#'>Nebraska</a>
    <a id='#'>Nevada</a>
    <a id='#'>New Hampshire</a>
    <a id='#'>New Jersey</a>
    <a id='#'>New Mexico</a>
    <a id='#'>New York</a>
    <a id='#'>North Carolina</a>
    <a id='#'>North Dakota</a>
    <a id='#'>Ohio</a>
    <a id='#'>Oklahoma</a>
    <a id='#'>Oregon</a>
    <a id='#'>Pennsylvania</a>
    <a id='#'>Rhode Island</a>
    <a id='#'>South Carolina</a>
    <a id='#'>South Dakota</a>
    <a id='#'>Tennessee</a>
    <a id='#'>Texas</a>
    <a id='#'>Utah</a>
    <a id='#'>Vermont</a>
    <a id='#'>Virginia</a>
    <a id='#'>Washington</a>
    <a id='#'>West Virginia</a>
    <a id='#'>Wisconsin</a>
    <a id='#'>Wyoming</a>
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
