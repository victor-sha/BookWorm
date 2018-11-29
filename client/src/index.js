import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Pages from "./pages";
import history from "./history";

const client = new ApolloClient({
  uri: "/graphql"
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router history={history}>
      <Pages />
    </Router>
  </ApolloProvider>,
  document.getElementById("root")
);
