import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import { redirectOnClick } from "../utils/table";

const columns = [
  {
    dataField: "name",
    text: "Название книги",
    sort: true,
    filter: textFilter()
  },
  {
    dataField: "author",
    text: "Автор",
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

const BOOKS = gql`
  {
    books {
      id
      name
      publicationDate
      author
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
          defaultSorted={defaultSorted}
          filter={filterFactory()}
        />
      );
    }}
  </Query>
);

export default Books;
