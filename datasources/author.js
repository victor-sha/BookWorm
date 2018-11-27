const { RESTDataSource } = require("apollo-datasource-rest");

class AuthorAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:4004/";
  }

  authorReducer(author) {
    return author;
  }

  async getAllAuthors() {
    return await this.get("authors");
  }

  async getAuthorById({ id }) {
    return await this.get(`authors/${id}`);
  }

  async getBooksByIds({ ids }) {
    return await Promise.all(ids.map(id => this.get(`books/${id}`)));
  }
}

module.exports = AuthorAPI;
