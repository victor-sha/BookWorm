import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import { Container } from "reactstrap";
import history from "../history";
import { AuthorCard } from "../components";

const GET_AUTHOR_DETAILES = gql`
  query getAuthorDetailes($authorId: ID!) {
    author(id: $authorId) {
      firstName
      lastName
      biography
      books {
        id
        name
        publicationDate
      }
    }
  }
`;

const columns = [
  {
    dataField: "name",
    text: "Название книги",
    sort: true,
    filter: textFilter()
  },
  {
    dataField: "publicationDate",
    text: "Дата выхода, год",
    sort: true,
    filter: textFilter()
  }
];

const defaultSorted = [
  {
    dataField: "name",
    order: "desc"
  }
];

const Author = ({ match }) => {
  return (
    <Query
      query={GET_AUTHOR_DETAILES}
      variables={{ authorId: match.params.id }}
    >
      {({ data, loading, error }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>ERROR: {error.message}</p>;

        return (
          <Container>
            <AuthorCard {...data.author} />
            <h2 className="mt-4">Книги автора</h2>
            <BootstrapTable
              bootstrap4
              striped
              hover
              keyField="id"
              data={data.author.books}
              columns={columns}
              rowEvents={{
                onClick: (_, { id }, __) => history.push(`/books/${id}`)
              }}
              defaultSorted={defaultSorted}
              filter={filterFactory()}
            />
          </Container>
        );
      }}
    </Query>
  );
};

export default Author;
