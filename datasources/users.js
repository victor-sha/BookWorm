const { RESTDataSource } = require("apollo-datasource-rest");

class UserAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:4004/";
  }

  async getUser({ login, password }) {
    return await this.get(`users?login=${login}&password=${password}`);
  }

  async createUser({ login, password }) {
    return await this.put("users/1", { login, password }).then(() => "ok");
  }
}

module.exports = UserAPI;
