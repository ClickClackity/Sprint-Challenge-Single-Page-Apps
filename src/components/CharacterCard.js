import React from "react";
import {
  Card,
  CardTitle,
  CardText,
  CardImg,
  CardBody,
  Col
} from "reactstrap";

export default function CharacterCard(props) {
  return (
    <Col xs="auto">
      <Card className="centering">
        <CardBody>
          <CardTitle className="titles">Name: {props.name}</CardTitle>
          <CardText className="bodies">Species: {props.species}</CardText>
          <CardText className="bodies">Gender: {props.gender}</CardText>
          </CardBody>
          <CardImg bottom width="100%" src={props.image} alt={props.name} />
      </Card>
    </Col>
  );
}
