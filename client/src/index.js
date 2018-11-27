import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { Query, ApolloProvider } from "react-apollo";
import gql from "graphql-tag";

import App from "./App";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
