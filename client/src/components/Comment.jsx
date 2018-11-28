import React from "react";
import PropTypes from "prop-types";
import { Card, CardBody, CardText, Row, Col, Button } from "reactstrap";

const Comment = ({ author, comment }) => (
  <Card>
    <CardBody>
      <Row>
        <Col md={2}>
          <img
            src="/def_face.jpg"
            className="img img-rounded img-fluid"
            alt=""
          />
        </Col>
        <Col md={10}>
          <p>
            <strong>{author}</strong>
          </p>
          <CardText>{comment}</CardText>
          <p>
            <Button color="primary" className="float-right ml-2 fas fas-replay">
              Replay
            </Button>
            <Button
              color="danger"
              className="float-right text-white fas fas-replay"
            >
              Like
            </Button>
          </p>
        </Col>
      </Row>
    </CardBody>
  </Card>
);

Comment.propTypes = {
  author: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired
};

export default Comment;
