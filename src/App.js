<<<<<<< HEAD
//import React, { useEffect } from 'react';
//import CarComponent from './components/CarComponent';
// Importing our theme provider which will make our global state available to child components
//import CarProvider from './utils/CarContext';
=======
import React, { useEffect } from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import CarComponent from './components/CarComponent';
// Importing our theme provider which will make our global state available to child components
import CarProvider from './utils/CarContext';
const httpLink = createHttpLink({
  uri: '/graphql',
});
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});
const gqlLink = authLink.concat(httpLink)
const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link:
   //ApolloLink.split(operation =>
    //operation.getContext().clientName === "rest",
    
    // The string "rest" and "clientName" can be anything you want
    //restLink, // Apollo will send to this if clientName is "rest"
    gqlLink, // Otherwise will send to this
  //),
  cache: new InMemoryCache(),
});
>>>>>>> 976e02da77e08b6f7da198530576c697c25e0c68

//export default function App() {
 // useEffect(() => {
 //   document.title = 'Travel App';
  //}, []);

<<<<<<< HEAD
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
=======
  return (
    <ApolloProvider client={client}>

      <CarComponent />
    </ApolloProvider>
>>>>>>> 976e02da77e08b6f7da198530576c697c25e0c68
  );
}

export default App;