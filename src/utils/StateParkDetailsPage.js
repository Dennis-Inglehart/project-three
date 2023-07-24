
import React from "react";
import { useParams } from "react-router-dom";
import stateParksData from "../data/state-parks.json";

const StateParkDetailsPage = () => {
  const { stateName } = useParams();

  const selectedState = stateParksData.states.find((state) => state.name === stateName);

  if (!selectedState) {
    return <div>No parks data available for this state.</div>;
  }

  const parks = selectedState.parks;

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

export default StateParkDetailsPage;
