import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import BootstrapTable from "react-bootstrap-table-next";

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
        />
      );
      // <p>{JSON.stringify(data.authors)}</p>;
    }}
  </Query>
);

export default Authors;
