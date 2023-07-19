import ChooseParks from "./utils/ChooseParks";
import Login from "./utils/Login";
import Profile from "./utils/Profile";
import Register from "./utils/Register";
import "./app.css";




function App()
{
  return(
    <main>
      <header>
        <div id='header'>National Parks App</div>
        <nav>
        </nav>
      </header>
      <ChooseParks></ChooseParks>
      <Login></Login>
      <Profile></Profile>
      <Register></Register>
    </main>
  );
}

export default App;