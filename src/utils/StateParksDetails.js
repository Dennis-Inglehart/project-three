import React from "react";

const StateParksDetails = ({ stateData, selectedState }) => {
  // Check if stateData is not an array or if selectedState is empty
  if (!Array.isArray(stateData) || !selectedState) {
    return <div>No parks data available for this state.</div>;
  }

  const selectedPark = stateData.find((state) => state.location === selectedState);

  // Check if selectedPark is found in the stateData
  if (!selectedPark) {
    return <div>No parks data available for this state.</div>;
  }

  const stateName = selectedPark.location;
  const parks = selectedPark.parks;

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