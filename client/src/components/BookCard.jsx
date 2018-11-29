import React from "react";
import PropTypes from "prop-types";
import { Card, CardBody, CardTitle, CardText, CardSubtitle } from "reactstrap";
import { Link } from "react-router-dom";

const BookCard = ({ id, name, author, publicationDate, description }) => (
  <>
    <h1>Книга</h1>
    <Card body outline color="primary">
      <CardBody>
        <CardTitle>Название: {name}</CardTitle>
        <CardSubtitle>
          Автор: <Link to={`/authors/${id}`}>{author}</Link>
        </CardSubtitle>
        <CardText>
          <small className="text-muted">
            Опубликован в {publicationDate} году
          </small>
        </CardText>
        <CardText>{description}</CardText>
      </CardBody>
    </Card>
  </>
);

BookCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  publicationDate: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default BookCard;
