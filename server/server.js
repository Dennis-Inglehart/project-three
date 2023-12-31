const express = require('express');
const path = require('path');
const { ApolloServer } = require('apollo-server-express');

const db = require('./config/connection');
const { typeDefs, resolvers } = require('./schemas');

const server = new ApolloServer({
  typeDefs,
  resolvers
});

const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app });
}
db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
  console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);

});
startApolloServer();
