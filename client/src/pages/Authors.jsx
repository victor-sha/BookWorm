import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, {
  textFilter,
  numberFilter,
  Comparator
} from "react-bootstrap-table2-filter";
import { redirectOnClick } from "../utils/table";

let customFilter;

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
    filter: numberFilter({
      withoutEmptyComparatorOption: true,
      getFilter: filter => {
        customFilter = filter;
      }
    })
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

      return <TableContainer data={data} />;
    }}
  </Query>
);

export default Authors;

class TableContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data.authors
    };
  }

  handleTableChange = (type, newState) => {
    const { filters } = newState;
    if (newState.filters.countBooks) {
      const { number, comparator } = newState.filters.countBooks.filterVal;
      if (number < 0) {
        customFilter({
          number: null,
          comparator: comparator
        });
      }
    }

    setTimeout(() => {
      const result = this.props.data.authors.filter(row => {
        let valid = true;
        for (const dataField in filters) {
          const { filterVal, filterType, comparator } = filters[dataField];

          if (filterType === "TEXT") {
            if (comparator === Comparator.LIKE) {
              valid =
                row[dataField]
                  .toString()
                  .toLowerCase()
                  .indexOf(filterVal.toLowerCase()) > -1;
            } else {
              valid = row[dataField] === filterVal;
            }
          }

          if (filterType === "NUMBER") {
            const filterValNumber = parseInt(filterVal.number);

            if (filterVal.number === null) {
              valid = true;
            } else if (filterVal.comparator === Comparator.LIKE) {
              valid = row[dataField] === filterValNumber;
            } else if (filterVal.comparator === Comparator.EQ) {
              valid = row[dataField] === filterValNumber;
            } else if (filterVal.comparator === Comparator.NE) {
              valid = row[dataField] !== filterValNumber;
            } else if (filterVal.comparator === Comparator.GT) {
              valid = row[dataField] > filterValNumber;
            } else if (filterVal.comparator === Comparator.GE) {
              valid = row[dataField] >= filterValNumber;
            } else if (filterVal.comparator === Comparator.LT) {
              valid = row[dataField] < filterValNumber;
            } else if (filterVal.comparator === Comparator.LE) {
              valid = row[dataField] <= filterValNumber;
            } else {
              valid = row[dataField] === filterVal;
            }
          }
          if (!valid) break;
        }
        return valid;
      });
      this.setState(() => ({
        data: result
      }));
    }, 1000);
  };

  render() {
    return (
      <BootstrapTable
        bootstrap4
        striped
        hover
        keyField="id"
        data={this.state.data}
        columns={columns}
        rowEvents={{ onClick: redirectOnClick }}
        remote={{
          filter: true
        }}
        onTableChange={this.handleTableChange}
        defaultSorted={defaultSorted}
        filter={filterFactory()}
      />
    );
  }
}
