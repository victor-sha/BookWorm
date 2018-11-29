import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, {
  textFilter,
  numberFilter
} from "react-bootstrap-table2-filter";
import { redirectOnClick } from "../utils/table";

const columns = [
  {
    dataField: "fullName",
    text: "Автор",
    sort: true,
    filter: textFilter()
  },
  {
    dataField: "countBooks",
    text: "Количество книг",
    sort: true,
    filter: numberFilter()
  }
];

const defaultSorted = [
  {
    dataField: "name",
    order: "desc"
  }
];

const AUTHORS = gql`
  {
    authors {
      id
      firstName
      lastName
      fullName
      countBooks
    }
  }
`;

const Authors = () => (
  <Query query={AUTHORS}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return (
        <BootstrapTable
          bootstrap4
          striped
          hover
          keyField="id"
          data={data.authors}
          columns={columns}
          rowEvents={{ onClick: redirectOnClick }}
          defaultSorted={defaultSorted}
          filter={filterFactory()}
        />
      );
    }}
  </Query>
);

export default Authors;
