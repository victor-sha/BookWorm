import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import history from "../history";
import Authors from "./Authors";
import Author from "./Author";
import Books from "./Books";
import Book from "./Book";
import Login from "./Login";
import { PageContainer } from "../components";

const Home = () => <div>HEllo</div>;

export default class Pages extends React.Component {
  state = {
    auth: !!localStorage.getItem("token") || false
  };

  handleAuth = ({ auth }) => {
    this.setState({ auth });
    localStorage.removeItem("token");
    history.push("/login");
  };

  render() {
    console.log(this.state.auth);
    return (
      <>
        {this.state.auth ? (
          <PageContainer handleAuth={this.handleAuth}>
            <Route exact path="/" component={Home} />
            <Route exact path="/books/:id" component={Book} />
            <Route exact path="/books" component={Books} />
            <Route exact path="/authors/:id" component={Author} />
            <Route exact path="/authors" component={Authors} />
          </PageContainer>
        ) : (
          <>
            <Login handleAuth={this.handleAuth} />
            <Redirect to="login" />
          </>
        )}
      </>
    );
  }
}
