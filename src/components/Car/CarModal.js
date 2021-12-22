import React, { Component } from "react";
import { Form, Modal, Button } from "react-bootstrap";
import { updateObject } from "../../shared/utility";

class CarModal extends Component {
  state = {
    fields: {
      make: "",
      model: "",
      color: "",
      yearOfFabrication: 2000,
      plate: "",
    },
  };

  onMakeChange(e) {
    const updatedField = updateObject(this.state.fields, {
      make: e.target.value,
    });
    this.setState({ fields: updatedField });
  }

  onModelChange(e) {
    const updatedField = updateObject(this.state.fields, {
      model: e.target.value,
    });
    this.setState({ fields: updatedField });
  }

  onColorChange(e) {
    const updatedField = updateObject(this.state.fields, {
      color: e.target.value,
    });
    this.setState({ fields: updatedField });
  }

  onYearChange(e) {
    const updatedField = updateObject(this.state.fields, {
      yearOfFabrication: e.target.value,
    });
    this.setState({ fields: updatedField });
  }

  onPlateChange(e) {
    const updatedField = updateObject(this.state.fields, {
      plate: e.target.value,
    });
    this.setState({ fields: updatedField });
  }

  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Add car to service {this.props.name} {this.props.id}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Floating className="mb-3">
              <Form.Control
                id="make"
                type="text"
                placeholder="make"
                className="text-capitalize"
                value={this.state.fields.make}
                onChange={(e) => this.onMakeChange(e)}
              />
              <label htmlFor="make">Make</label>
            </Form.Floating>
            <Form.Floating className="mb-3">
              <Form.Control
                id="model"
                type="text"
                placeholder="model"
                className="text-capitalize"
                value={this.state.fields.model}
                onChange={(e) => this.onModelChange(e)}
              />
              <label htmlFor="model">Model</label>
            </Form.Floating>
            <Form.Floating className="mb-3">
              <Form.Control
                id="color"
                type="text"
                placeholder="color"
                className="text-capitalize"
                value={this.state.fields.color}
                onChange={(e) => this.onColorChange(e)}
              />
              <label htmlFor="color">Color</label>
            </Form.Floating>
            <Form.Floating className="mb-3">
              <Form.Control
                id="year"
                type="number"
                placeholder="year"
                value={this.state.fields.yearOfFabrication}
                onChange={(e) => this.onYearChange(e)}
              />
              <label htmlFor="year">Year of fabrication</label>
            </Form.Floating>
            <Form.Floating className="mb-3">
              <Form.Control
                id="plate"
                type="text"
                placeholder="plate number"
                className="text-uppercase"
                value={this.state.fields.plate}
                onChange={(e) => this.onPlateChange(e)}
              />
              <label htmlFor="plate">Plate</label>
            </Form.Floating>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() => {
              this.props.handleSubmit(this.state.fields);
            }}
          >
            Add Car
          </Button>
          <Button variant="secondary" onClick={this.props.handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default CarModal;
