const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    authors: [Author]
    author(id: ID!): Author
    book(id: ID!): Book
    books: [Book]
    me: User
  }

  type Mutation {
    login(email: String): String # login token
  }

  type Author {
    id: ID!
    firstName: String!
    lastName: String!
    biography: String
    countBooks: Int!
    books: [Book]
  }

  type User {
    id: ID!
    email: String!
  }

  type Book {
    id: ID!
    name: String!
    authorId: ID!
    author: Author
    publicationDate: String
    description: String
  }
`;

// const resolvers = {
//   Query: {
//     author(parent, args, context, info) {
//       return
//     }
//   }
// }

module.exports = typeDefs;
