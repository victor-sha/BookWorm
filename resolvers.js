module.exports = {
  Query: {
    authors: async (_, __, { dataSources }) =>
      dataSources.authorAPI.getAllAuthors(),
    author: (_, { id }, { dataSources }) =>
      dataSources.authorAPI.getAuthorById({ id: 1 })
  }
};
