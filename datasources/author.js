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
}

module.exports = AuthorAPI;
