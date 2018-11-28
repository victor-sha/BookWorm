import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

import { BookCard } from "../components";
import { CommentsList } from "../components";

const GET_BOOK_DETAILES = gql`
  query getBookDetailes($bookId: ID!) {
    book(id: $bookId) {
      id
      author
      name
      publicationDate
      description
    }
  }
`;

const Author = ({ match }) => {
  return (
    <Query query={GET_BOOK_DETAILES} variables={{ bookId: match.params.id }}>
      {({ data, loading, error }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>ERROR: {error.message}</p>;

        return (
          <>
            <BookCard {...data.book} />
            <CommentsList />
          </>
        );
      }}
    </Query>
  );
};

export default Author;
