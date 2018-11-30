import React from "react";
import PropTypes from "prop-types";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

const AuthorCard = ({ firstName, lastName, biography }) => (
  <>
    <h1>Автор</h1>
    <Card body outline color="primary">
      <CardBody>
        <CardTitle>{`Автор: ${firstName} ${lastName}`}</CardTitle>
        <CardText>
          <strong>Биография:</strong> {biography}
        </CardText>
        <div className="text-muted float-right">По данным википедии</div>
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
