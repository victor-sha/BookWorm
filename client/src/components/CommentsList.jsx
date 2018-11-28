import React from "react";
import PropTypes from "prop-types";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { ListGroup, ListGroupItem, Container } from "reactstrap";

import Comment from "./Comment";

const commentsArr = [{ id: 1 }, { id: 2 }];

const GET_BOOKS_COMMENTS = gql`
  query getAllComments {
    comments {
      id
      author
      comment
    }
  }
`;

const CommentsList = () => (
  <Query query={GET_BOOKS_COMMENTS}>
    {({ data: { comments }, loading, error }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>ERROR: {error.message}</p>;

      return (
        <Container>
          Комментарии
          {comments.map(comment => (
            <div key={comment.id}>
              {/* <ListGroupItem> */}
              <Comment author={comment.author} comment={comment.comment} />
              {/* </ListGroupItem> */}
            </div>
          ))}
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

export default CommentsList;
