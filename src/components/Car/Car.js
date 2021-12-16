import React from "react";
import "./Car.scss";

const Car = (props) => {
  const car = (
    <div className="List">
      <div className="Attribute">{props.car.make}</div>
      <div className="Attribute">{props.car.model}</div>
      <div className="Attribute">{props.car.color}</div>
    </div>
  );

  return <div>{car}</div>;
};

export default Car;
