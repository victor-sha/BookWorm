import React from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

import history from "../history";
import { LoginForm } from "../components";

export const LOGIN_USER = gql`
  mutation login($login: String!, $password: String!) {
    login(login: $login, password: $password)
  }
`;

export default function Login({ handleLogin }) {
  return (
    <Mutation
      mutation={LOGIN_USER}
      onCompleted={({ login }) => {
        handleLogin({ login });
      }}
    >
      {(login, { loading, error }) => {
        if (loading) return "Loading...";

        return <LoginForm login={login} error={error} />;
      }}
    </Mutation>
  );
}
