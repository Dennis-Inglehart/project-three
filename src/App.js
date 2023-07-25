import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./utils/Login";
import Profile from "./utils/Profile";
import Register from "./utils/Register";
import StateParksDetails from "./utils/StateParksDetails"; // Import StateParksDetails
import stateParksData from "./data/state-parks.json";
import SelectParks from "./utils/SelectParks";
import "./app.css";

function App() {
  const [selectedState, setSelectedState] = useState("");

  return (
    <Routes>
      <Route
        index
        element={
          <main>
            <header>
              <div id="header">National Parks App</div>
              <nav>
                <Link to="/Login">Login</Link>
                <Link to="/Register">Signup</Link>
                <Link to="/Profile">Profile</Link>
              </nav>
            </header>
            <div id="chooseParks">
              <SelectParks selectedState={selectedState} setSelectedState={setSelectedState} />
            </div>
          </main>
        }
      />

      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Profile" element={<Profile />} />

      {/* Add a route for displaying state park details */}
      <Route
        path="/state/:stateName"
        element={<StateParksDetails stateParksData={stateParksData} selectedState={selectedState} />}
      />
    </Routes>
  );
}

export default App;
