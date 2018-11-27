const { RESTDataSource } = require("apollo-datasource-rest");

class BookAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:4004/";
  }

  async getAllBooks() {
    return await this.get("books");
  }

  async getBookById({ id }) {
    return await this.get(`books/${id}`);
  }

  async getAuthorById({ ids }) {
    return await Promise.all(ids.map(id => this.get(`books/${id}`)));
  }
}

module.exports = BookAPI;
