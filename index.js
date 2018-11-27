const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const AuthorAPI = require("./datasources/author");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    authorAPI: new AuthorAPI()
  })
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
