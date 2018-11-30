import React from "react";
import PropTypes from "prop-types";
import { Card, CardBody, Row, Col, CardTitle } from "reactstrap";

const Comment = ({ author, comment, date }) => (
  <Row style={{ display: "flex" }}>
    <Col>
      <Card>
        <CardBody>
          <CardTitle>
            <i className="fa fa-user-secret fa-2x mx-auto text-secondary" />
            <strong>{author}</strong>
            <small className="text-muted font-italic"> {date}</small>
            <div className="float-right">
              <i className="fa fa-reply text-secondary" />{" "}
              <i className="fa fa-heart text-danger" />
            </div>
          </CardTitle>
          {comment}
        </CardBody>
      </Card>
    </Col>
  </Row>
);

Comment.propTypes = {
  author: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
};

export default Comment;
