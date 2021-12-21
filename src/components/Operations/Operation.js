import React, { Component } from "react";
import { Button, Col } from "react-bootstrap";

class Operation extends Component {
  render() {
    return (
      <>
        <Col lg="4">{this.props.description}</Col>
        <Col lg="4">{this.props.price}</Col>
        <Col lg="1">
          <Button variant="outline-success">Add</Button>
        </Col>
        <Col lg="1">
          <Button variant="outline-danger">Remove</Button>
        </Col>
      </>
    );
  }
}

export default Operation;
