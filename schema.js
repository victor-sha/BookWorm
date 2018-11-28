const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    authors: [Author]
    author(id: ID!): Author
    book(id: ID!): Book
    books: [Book]
    comment(id: ID!): Comment
    comments(pageNum: Int): [Comment]
    me: User
  }

  type Mutation {
    login(email: String): String # login token
  }

  type Author {
    id: ID!
    firstName: String!
    lastName: String!
    fullName: String
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
    author: String
    publicationDate: String
    description: String
  }

  type Comment {
    id: ID!
    author: String!
    comment: String!
  }
`;

module.exports = typeDefs;
