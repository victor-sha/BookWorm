const { AuthenticationError } = require("apollo-server");

module.exports = {
  Query: {
    authors: async (_, __, { dataSources }) =>
      dataSources.authorAPI.getAllAuthors(),
    author: (_, { id }, { dataSources }) =>
      dataSources.authorAPI.getAuthorById({ id }),
    books: async (_, __, { dataSources }) => dataSources.bookAPI.getAllBooks(),
    book: async (_, { id }, { dataSources }) =>
      dataSources.bookAPI.getBookById({ id }),
    comments: async (_, { pageNum }, { dataSources }) =>
      dataSources.commentAPI.getCommentsByPage({ pageNum }),
    comment: async (_, { id }, { dataSources }) =>
      dataSources.commentAPI.getCommentById({ id }),
    user: async (_, { login, password }, { dataSources }) =>
      dataSources.userAPI.getUser({ login, password })
  },
  Mutation: {
    login: async (_, { login, password }, { dataSources }) => {
      const user = await dataSources.userAPI.getUser({ login, password });
      if (user && user.length > 0) {
        return "234l4j2kl34j2klrjwioqjaw";
      } else {
        throw new AuthenticationError("Не правильный логин/пароль");
      }
    }
  },
  Author: {
    books: async ({ booksIds }, _, { dataSources }) =>
      dataSources.bookAPI.getBooksByIds({ ids: booksIds }),
    countBooks: async ({ booksIds }, _) => booksIds.length || 0
  },
  Book: {
    author: async ({ authorId }, _, { dataSources }) =>
      dataSources.authorAPI.getAuthorById({ id: authorId }),
    countComments: async (_, __, { dataSources }) =>
      dataSources.commentAPI.getAllComments().then(res => res.length)
  }
};
