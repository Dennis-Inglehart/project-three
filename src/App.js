//import React, { useEffect } from 'react';
//import CarComponent from './components/CarComponent';
// Importing our theme provider which will make our global state available to child components
//import CarProvider from './utils/CarContext';

//export default function App() {
 // useEffect(() => {
 //   document.title = 'Travel App';
  //}, []);

 // return (
    //<CarProvider>
   //   <CarComponent />
   // </CarProvider>
 // );
//}
import ChooseParks from "./utils/ChooseParks";

function App()
{
  return(
    <main>
      <header>
        <div>National Parks App</div>
        <a href="">Login</a>
      </header>
      <ChooseParks></ChooseParks>
    </main>
  );
}

export default App;