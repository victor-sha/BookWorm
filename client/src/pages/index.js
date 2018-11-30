import React from "react";
import { Route, Redirect } from "react-router-dom";
import history from "../history";
import Authors from "./Authors";
import Author from "./Author";
import Books from "./Books";
import Book from "./Book";
import Login from "./Login";
import { PageContainer } from "../components";

export default class Pages extends React.Component {
  state = {
    auth: !!localStorage.getItem("token") || false
  };

  handleLogin = ({ login }) => {
    this.setState({ auth: true });
    localStorage.setItem("token", login);
    history.push("/authors");
  };

  handleLogout = () => {
    this.setState({ auth: false });
    localStorage.removeItem("token");
    history.push("/login");
  };

  render() {
    return (
      <>
        {this.state.auth ? (
          <PageContainer handleLogout={this.handleLogout}>
            <Route exact path="/books/:id" component={Book} />
            <Route exact path="/books" component={Books} />
            <Route exact path="/authors/:id" component={Author} />
            <Route exact path="/authors" component={Authors} />
            <Redirect to="/authors" />
          </PageContainer>
        ) : (
          <>
            <Login handleLogin={this.handleLogin} />
            <Redirect to="login" />
          </>
        )}
      </>
    );
  }
}
