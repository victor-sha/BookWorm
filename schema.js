const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    authors: [Author]
    author(id: ID!): Author
    book(id: ID!): Book
    books: [Book]
    comment(id: ID!): Comment
    comments(pageNum: Int): [Comment]
    user(login: String, password: String): User
  }

  type Mutation {
    login(login: String, password: String): String # login token
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
    login: String
  }

  type Book {
    id: ID!
    name: String!
    authorId: ID!
    author: Author
    publicationDate: String
    description: String
  }

  type Comment {
    id: ID!
    author: String!
    comment: String!
    date: String
  }
`;

module.exports = typeDefs;
