import axios from "axios";
import React from "react";

import { Card, Button } from "react-bootstrap";
import { useState } from "react/cjs/react.development";
import { baseUrl } from "../..";
import CarModal from "../Car/CarModal";

export const Service = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = (car) => {
    axios
      .post(baseUrl + "service/car/" + props.id, car)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const modal = (
    <>
      <CarModal
        show={show}
        handleClose={handleClose}
        handleSubmit={(car) => handleSubmit(car)}
        name={props.name}
        id={props.id}
      />
    </>
  );

  const maxCap = props.maxCapacity;
  const noCars = props.noCars;
  const capacity = () => {
    if (noCars < 0.3 * maxCap) {
      return "green";
    } else if (noCars < 0.6 * maxCap) {
      return "black";
    } else {
      return "red";
    }
  };
  let color = capacity();
  return (
    <Card>
      <Card.Body>
        Service {props.name} {props.id}{" "}
        <span className="ms-3" style={{ color: color }}>
          {props.noCars}
        </span>
        /{props.maxCapacity}
      </Card.Body>
      <Card.Footer>
        <Button variant="outline-success" onClick={handleShow}>
          Add Car
        </Button>
      </Card.Footer>
      {modal}
    </Card>
  );
};
