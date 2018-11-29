import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Container } from "reactstrap";

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      error: null
    };

    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
  }

  dismissError() {
    this.setState({ error: null });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    if (!this.state.username) {
      this.setState({ error: "Требуется логин" });
    }

    if (!this.state.password) {
      this.setState({ error: "требуется пароль" });
    }
    if (this.state.error === null) {
      this.props.login({
        variables: { login: this.state.username, password: this.state.password }
      });
    }
  }

  handleUserChange(evt) {
    this.setState({
      username: evt.target.value
    });
  }

  handlePassChange(evt) {
    this.setState({
      password: evt.target.value
    });
  }

  render() {
    return (
      <>
        <div className="mx-auto" style={{ marginTop: "100px", width: "30rem" }}>
          <h2>Книги и Авторы</h2>
          <form onSubmit={this.handleSubmit}>
            {this.state.error && (
              <h3 data-test="error" onClick={this.dismissError}>
                <button onClick={this.dismissError}>✖</button>
                {this.state.error}
              </h3>
            )}
            <FormGroup>
              <Label>Логин</Label>
              <Input
                type="text"
                data-test="username"
                value={this.state.username}
                onChange={this.handleUserChange}
              />
            </FormGroup>
            <FormGroup>
              <Label>Пароль</Label>
              <Input
                type="password"
                data-test="password"
                value={this.state.password}
                onChange={this.handlePassChange}
              />
            </FormGroup>

            <Button type="submit">Войти</Button>
          </form>
        </div>
      </>
    );
  }
}

export default LoginPage;
