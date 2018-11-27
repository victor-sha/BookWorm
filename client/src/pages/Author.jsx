import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

import { AuthorCard } from "../components";

const GET_AUTHOR_DETAILES = gql`
  query getAuthorDetailes($authorId: ID!) {
    author(id: $authorId) {
      firstName
      lastName
      biography
    }
  }
`;

const Author = ({ match }) => {
  return (
    <Query
      query={GET_AUTHOR_DETAILES}
      variables={{ authorId: match.params.id }}
    >
      {({ data, loading, error }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>ERROR: {error.message}</p>;

        return <AuthorCard {...data.author} />;
      }}
    </Query>
  );
};

export default Author;
