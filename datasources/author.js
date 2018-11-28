const { RESTDataSource } = require("apollo-datasource-rest");

class AuthorAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:4004/";
  }

  authorReducer(author) {
    return { ...author, fullName: author.firstName + " " + author.lastName };
  }

  async getAllAuthors() {
    const res = await this.get("authors");
    return res && res.length
      ? res.map(author => this.authorReducer(author))
      : [];
  }

  async getAuthorById({ id }) {
    return await this.get(`authors/${id}`).then(res => this.authorReducer(res));
  }

  async getBooksByIds({ ids }) {
    return await Promise.all(ids.map(id => this.get(`books/${id}`)));
  }
}

module.exports = AuthorAPI;
