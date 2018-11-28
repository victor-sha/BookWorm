const { RESTDataSource } = require("apollo-datasource-rest");

class CommentAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:4004/";
  }

  async getAllComments() {
    return await this.get("comments");
  }

  async getCommentsByPage({ pageNum }) {
    return await this.get(`comments?_page=${pageNum}`);
  }

  async getCommentById({ id }) {
    return await this.get(`comments/${id}`);
  }
}

module.exports = CommentAPI;
