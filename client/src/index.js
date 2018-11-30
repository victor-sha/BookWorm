import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import ApolloClient, { HttpLink } from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Pages from "./pages";
import history from "./history";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "/graphql",
    headers: {
      authorization: localStorage.getItem("token")
    }
  })
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router history={history}>
      <Pages />
    </Router>
  </ApolloProvider>,
  document.getElementById("root")
);
