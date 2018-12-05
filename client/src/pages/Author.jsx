import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, {
  numberFilter,
  textFilter,
  Comparator
} from "react-bootstrap-table2-filter";
import { Container } from "reactstrap";
import history from "../history";
import { AuthorCard } from "../components";

const GET_AUTHOR_DETAILES = gql`
  query getAuthorDetailes($authorId: ID!) {
    author(id: $authorId) {
      id
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

let customFilter;

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

const Author = ({ match }) => {
  return (
    <Query
      query={GET_AUTHOR_DETAILES}
      variables={{ authorId: match.params.id }}
    >
      {({ data, loading, error }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>ERROR: {error.message}</p>;

        return <TableContainer data={data} />;
      }}
    </Query>
  );
};

export default Author;

class TableContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data.author.books
    };
  }

  handleTableChange = (type, newState) => {
    const { filters } = newState;
    if (newState.filters.publicationDate) {
      const { number, comparator } = newState.filters.publicationDate.filterVal;
      if (number < 0) {
        customFilter({
          number: null,
          comparator: comparator
        });
      }
    }

    setTimeout(() => {
      const result = this.props.data.author.books.filter(row => {
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
    const { data } = this.props;
    return (
      <Container>
        <AuthorCard {...data.author} />
        <h2 className="mt-4">Книги автора</h2>
        <BootstrapTable
          bootstrap4
          striped
          hover
          keyField="id"
          data={this.state.data}
          columns={columns}
          rowEvents={{
            onClick: (_, { id }, __) => history.push(`/books/${id}`)
          }}
          remote={{
            filter: true
          }}
          onTableChange={this.handleTableChange}
          defaultSorted={defaultSorted}
          filter={filterFactory()}
        />
      </Container>
    );
  }
}
