import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import BootstrapTable from "react-bootstrap-table-next";
import history from "../history";

const columns = [
  {
    dataField: "id",
    text: "Author ID"
  },
  {
    dataField: "firstName",
    text: "Автор"
  },
  {
    dataField: "countBooks",
    text: "Количество книг"
  }
];

const AUTHORS = gql`
  {
    authors {
      id
      firstName
      lastName
      countBooks
    }
  }
`;

const rowEvents = {
  onClick: (_, __, rowIndex) =>
    history.push(`${history.location.pathname}/${rowIndex}`)
};

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
          rowEvents={rowEvents}
        />
      );
    }}
  </Query>
);

export default Authors;
