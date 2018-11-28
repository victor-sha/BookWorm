import React from "react";
import PropTypes from "prop-types";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

const AuthorCard = ({ firstName, lastName, biography }) => (
  <>
    <h1>Автор</h1>
    <Card body outline color="primary">
      <CardBody>
        <CardTitle>{`${firstName} ${lastName}`}</CardTitle>
        <CardText>Биография: {biography}</CardText>
      </CardBody>
    </Card>
  </>
);

AuthorCard.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  biography: PropTypes.string.isRequired
};

export default AuthorCard;
