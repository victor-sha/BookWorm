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
      console.log(user);
      return user && user.length > 0
        ? "234l4j2kl34j2klrjwioqjaw"
        : "Не правильный логин/пароль";
    }
  }
};
