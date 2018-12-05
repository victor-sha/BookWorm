import React from "react";
import PropTypes from "prop-types";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { compose, withStateHandlers } from "recompose";
import { Container } from "reactstrap";

import Comment from "./Comment";
import PaginationButtons from "./PaginationButtons";

const GET_BOOKS_COMMENTS = gql`
  query getCommentsByPage($pageNum: Int) {
    comments(pageNum: $pageNum) {
      id
      author
      comment
      date
    }
  }
`;

const CommentsList = ({ pageNum, handlePageBtnClick, countComments }) => (
  <Query query={GET_BOOKS_COMMENTS} variables={{ pageNum }}>
    {({ data: { comments }, loading, error }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>ERROR: {error.message}</p>;

      return (
        <Container className="mt-2">
          <h2>Комментарии</h2>
          {comments.map(({ id, author, comment, date }) => (
            <div key={id}>
              <Comment author={author} comment={comment} date={date} />
            </div>
          ))}
          <PaginationButtons
            countComments={countComments}
            pageSize={10}
            currentPage={pageNum}
            handlePageBtnClick={handlePageBtnClick}
          />
        </Container>
      );
    }}
  </Query>
);

CommentsList.defaultProps = {
  pageNum: 1
};

CommentsList.propTypes = {
  pageNum: PropTypes.number,
  countComments: PropTypes.number.isRequired
};

export default compose(
  withStateHandlers(
    ({ initialPageNum = 1 }) => ({
      pageNum: initialPageNum
    }),
    {
      handlePageBtnClick: () => value => ({
        pageNum: value
      })
    }
  )
)(CommentsList);
