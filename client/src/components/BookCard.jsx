import React from "react";
import PropTypes from "prop-types";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

const BookCard = ({ name, author }) => (
  <>
    <h1>Книга</h1>
    <Card body inverse color="secondary">
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardText>Автор: {author}</CardText>
      </CardBody>
    </Card>
  </>
);

BookCard.propTypes = {
  name: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
};

export default BookCard;
