module.exports = {
  Query: {
    authors: async (_, __, { dataSources }) =>
      dataSources.authorAPI.getAllAuthors(),
    author: (_, { id }, { dataSources }) => {
      console.log("resolver id", id);
      return dataSources.authorAPI.getAuthorById({ id: 1 });
    }
  }
};
