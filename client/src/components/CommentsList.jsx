import React from "react";
import PropTypes from "prop-types";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { compose, withStateHandlers } from "recompose";
import { Button, Container } from "reactstrap";

import Comment from "./Comment";

const commentsArr = [{ id: 1 }, { id: 2 }];

const GET_BOOKS_COMMENTS = gql`
  query getCommentsByPage($pageNum: Int) {
    comments(pageNum: $pageNum) {
      id
      author
      comment
    }
  }
`;

const CommentsList = ({ pageNum, firstButtonClick, secondButtonClick }) => (
  <Query query={GET_BOOKS_COMMENTS} variables={{ pageNum }}>
    {({ data: { comments }, loading, error }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>ERROR: {error.message}</p>;

      return (
        <Container className="mt-2">
          <h2>Комментарии</h2>
          {comments.map(comment => (
            <div key={comment.id}>
              <Comment author={comment.author} comment={comment.comment} />
            </div>
          ))}
          <p className="float-right mt-2">
            <Button
              color={pageNum === 1 ? "primary" : "light"}
              onClick={firstButtonClick}
            >
              1
            </Button>
            <Button
              color={pageNum === 2 ? "primary" : "light"}
              onClick={secondButtonClick}
            >
              2
            </Button>
          </p>
        </Container>
      );
    }}
  </Query>
);

CommentsList.defaultProps = {
  comments: commentsArr
};

CommentsList.propTypes = {
  comments: PropTypes.array
};

export default compose(
  withStateHandlers(
    ({ initialPageNum = 1 }) => ({
      pageNum: initialPageNum
    }),
    {
      firstButtonClick: () => () => ({
        pageNum: 1
      }),
      secondButtonClick: () => () => ({
        pageNum: 2
      })
    }
  )
)(CommentsList);
