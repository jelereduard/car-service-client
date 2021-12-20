import React from "react";
import { Card, Button, Col } from "react-bootstrap";

const Car = (props) => {
  const color = props.car.color;
  const carCard = (
    <Col>
      <Card
        id={props.car.id}
        bg="light"
        text="dark"
        border="dark"
        // className="w-25"
      >
        <Card.Header>{props.car.plate}</Card.Header>
        <Card.Img
          variant="top"
          // src=""
          height="100px"
          style={{ background: color }}
        />
        <Card.Body>
          <Card.Title>
            {props.car.make} {props.car.model}
          </Card.Title>
          <Card.Text>{color}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="outline-success" className="me-3">
            Start
          </Button>
          <Button variant="outline-danger">Delete</Button>
        </Card.Footer>
      </Card>
    </Col>
  );

  return <div style={{ padding: "1.5rem 4rem" }}>{carCard}</div>;
};

export default Car;
