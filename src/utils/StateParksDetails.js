import React from "react";

const StateParksDetails = ({ stateParksData, selectedState }) => {
  // Check if selectedState is empty or undefined
  if (!selectedState) {
    return <div>No parks data available for this state.</div>;
  }

  // Find the selected state object from stateParksData
  const selectedStateObject = stateParksData.states.find((state) => state.name === selectedState);

  // Check if selectedStateObject is found
  if (!selectedStateObject) {
    return <div>No parks data available for this state.</div>;
  }

  const stateName = selectedStateObject.name;
  const parks = selectedStateObject.parks;

  return (
    <div>
      <h2>{stateName}</h2>
      {parks.map((park) => (
        <div key={park.name}>
          <h3>{park.name}</h3>
          <p>Location: {park.location}</p>
          <p>Activities: {park.activities.join(", ")}</p>
        </div>
      ))}
    </div>
  );
};

export default StateParksDetails;
