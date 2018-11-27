const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const AuthorAPI = require("./datasources/author");
const BookAPI = require("./datasources/books");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    authorAPI: new AuthorAPI(),
    bookAPI: new BookAPI()
  })
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
