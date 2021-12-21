import axios from "axios";
import React, { useState } from "react";
import { Card, Button, Col } from "react-bootstrap";
import { serviceUrl } from "../..";
import OperationsModal from "../Operations/OperationsModal";

const Car = (props) => {
  const [show, setShow] = useState(false);

  const handleDelete = () => {
    let answer = window.confirm("Delete " + props.car.plate + "?");
    if (answer) {
      axios.delete(
        serviceUrl + "service/" + props.serviceId + "?carId=" + props.car.id
      );
      document.location.reload();
    }
  };

  const handleShow = () => setShow(true);

  const handleClose = () => setShow(false);

  const modal = show ? (
    <>
      <OperationsModal
        show={show}
        handleClose={handleClose}
        // handleSubmit={(car) => handleSubmit(car)}
        carId={props.car.id}
        carPlate={props.car.plate}
      />
    </>
  ) : null;

  const carPlate = (plate) => {
    let carplate = String(plate);
    return carplate.toUpperCase();
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
        <Card.Header>{carPlate(props.car.plate)}</Card.Header>
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
          <Button
            onClick={() => handleShow()}
            variant="outline-success"
            className="me-3"
          >
            Operations
          </Button>
          <Button onClick={() => handleDelete()} variant="outline-danger">
            Delete
          </Button>
        </Card.Footer>
      </Card>
      {modal}
    </Col>
  );

  return <div style={{ padding: "1.5rem 4rem" }}>{carCard}</div>;
};

export default Car;
