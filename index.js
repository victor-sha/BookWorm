const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const AuthorAPI = require("./datasources/author");
const BookAPI = require("./datasources/books");
const CommentAPI = require("./datasources/comments");
const UserAPI = require("./datasources/users");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    authorAPI: new AuthorAPI(),
    bookAPI: new BookAPI(),
    commentAPI: new CommentAPI(),
    userAPI: new UserAPI()
  })
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
