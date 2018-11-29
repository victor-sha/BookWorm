import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import BootstrapTable from "react-bootstrap-table-next";
import { Container } from "reactstrap";
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

const columns = [
  {
    dataField: "name",
    text: "Название книги"
  },
  {
    dataField: "publicationDate",
    text: "Дата выхода"
  }
];

const BOOKS = gql`
  query getBookDetailes($bookId: ID!) {
    book(id: $bookId) {
      id
      name
      publicationDate
    }
  }
`;

const Author = ({ match }) => {
  return (
    <>
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
      <Container>
        <h2 className="mt-2">Книги автора</h2>
        <Query query={BOOKS} variables={{ bookId: 1 }}>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;

            return (
              <BootstrapTable
                bootstrap4
                striped
                hover
                keyField="id"
                data={[data.book]}
                columns={columns}
              />
            );
          }}
        </Query>
      </Container>
    </>
  );
};

export default Author;
