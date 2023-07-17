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

export default function App() {
  useEffect(() => {
    document.title = 'Digital Garage';
  }, []);

  return (
    <ApolloProvider client={client}>

      <CarComponent />
    </ApolloProvider>
  );
}
