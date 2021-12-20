import axios from "axios";
import React from "react";
import { Card, Button, Col } from "react-bootstrap";
import { baseUrl } from "../..";

const Car = (props) => {
  const handleDelete = () => {
    let answer = window.confirm("Delete " + props.car.plate + "?");
    if (answer) {
      axios.delete(
        baseUrl + "service/" + props.serviceId + "?carId=" + props.car.id
      );
      document.location.reload();
    }
  };

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
          <Button onClick={() => handleDelete()} variant="outline-danger">
            Delete
          </Button>
        </Card.Footer>
      </Card>
    </Col>
  );

  return <div style={{ padding: "1.5rem 4rem" }}>{carCard}</div>;
};

export default Car;
