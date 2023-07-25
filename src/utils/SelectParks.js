import React, { useState } from "react";
import stateParksData from "../data/state-parks.json";
import StateParksDetails from "./StateParksDetails";

export default function SelectParks() {
  console.log(stateParksData); // Check if stateParksData is correctly imported and formatted
  const [selectedState, setSelectedState] = useState("");

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };

  return (
    <div>
      <select
        name="Choose a State"
        id="ChooseStateDropDown"
        style={{
          color: "wheat",
          backgroundColor: "brown",
          fontSize: "150%",
          textAlign: "center",
          marginLeft: "43%",
          marginTop: "1%",
        }}
        onChange={handleStateChange}
        value={selectedState}
      >
        <option value="">Choose a State</option>
        {stateParksData.states.map((state) => ( // Access states array here
          <option key={state.name} value={state.name}>
            {state.name}
          </option>
        ))}
      </select>

      {selectedState && (
  <StateParksDetails stateParksData={stateParksData} selectedState={selectedState} />
)}
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
