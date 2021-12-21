import React, { Component } from "react";
import { Modal, Button, Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";

import * as actions from "../../store/actions/index";
import Operation from "./Operation";

class OperationsModal extends Component {
  handleSubmit(car) {
    console.log("clicked");
  }

  componentDidMount() {
    this.props.onOptionsFetch();
  }

  render() {
    const operations = this.props.operations
      ? this.props.operations.map((operation) => {
          console.log(operation);
          return (
            <Row key={operation.id} className="mb-1">
              <Operation
                description={operation.description}
                price={operation.price}
              />
            </Row>
          );
        })
      : null;
    return (
      <Modal
        show={this.props.show}
        onHide={this.props.handleClose}
        // handleSubmit={(car) => handleSubmit(car)}
        carid={this.props.carId}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {this.props.carPlate}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col lg="4">
                <p>description</p>
              </Col>
              <Col lg="4">
                <p>price</p>
              </Col>
              <Col lg="1"></Col>
              <Col lg="1"></Col>
            </Row>
            {operations}
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    operations: state.operations.operations,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onOptionsFetch: () => dispatch(actions.fetchOperations()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OperationsModal);
