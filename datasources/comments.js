const { RESTDataSource } = require("apollo-datasource-rest");

class CommentAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:4004/";
  }

  async getAllComments() {
    return await this.get("comments");
  }

  async getCommentById({ id }) {
    return await this.get(`comments/${id}`);
  }
}

module.exports = CommentAPI;
