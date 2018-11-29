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

export default function Login({ handleAuth }) {
  return (
    <Mutation
      mutation={LOGIN_USER}
      onCompleted={({ login }) => {
        localStorage.setItem("token", login);
        handleAuth({ auth: true });
        history.push("/authors");
      }}
    >
      {(login, { loading, error }) => {
        if (loading) return "Loading...";
        if (error) return <p>An error occurred</p>;

        return <LoginForm login={login} />;
      }}
    </Mutation>
  );
}
