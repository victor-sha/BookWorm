import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import BootstrapTable from "react-bootstrap-table-next";
import { redirectOnClick } from "../utils/table";

const columns = [
  {
    dataField: "id",
    text: "Book ID"
  },
  {
    dataField: "name",
    text: "Название книги"
  },
  {
    dataField: "author",
    text: "Автор"
  }
];

const BOOKS = gql`
  {
    books {
      id
      name
      publicationDate
    }
  }
`;

const Books = () => (
  <Query query={BOOKS}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return (
        <BootstrapTable
          bootstrap4
          striped
          hover
          keyField="id"
          data={data.books}
          columns={columns}
          rowEvents={{ onClick: redirectOnClick }}
        />
      );
    }}
  </Query>
);

export default Books;
