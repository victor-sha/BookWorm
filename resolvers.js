module.exports = {
  Query: {
    authors: async (_, __, { dataSources }) =>
      dataSources.authorAPI.getAllAuthors(),
    author: (_, { id }, { dataSources }) =>
      dataSources.authorAPI.getAuthorById({ id }),
    books: async (_, __, { dataSources }) => dataSources.bookAPI.getAllBooks(),
    book: async (_, { id }, { dataSources }) =>
      dataSources.bookAPI.getBookById({ id }),
    comments: async (_, __, { dataSources }) =>
      dataSources.commentAPI.getAllComments(),
    comment: async (_, { id }, { dataSources }) =>
      dataSources.commentAPI.getCommentById({ id })
  }
  // Book: {
  //   author: async (_, {id}, {dataSources}) =>

  // }
};
