import ChooseParks from "./utils/ChooseParks";

function App()
{
  return(
    <main>
      <header>
        <div>National Parks App</div>
        <nav>
        <a href="Login">Login</a>
        <a href="Profile">Profile</a>
        </nav>

      </header>
      <ChooseParks></ChooseParks>
    </main>
  );
}

export default App;