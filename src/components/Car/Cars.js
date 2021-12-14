import React from "react";
import Car from "./Car";

const Cars = (props) => {
  const list = props.carList.map((x) => {
    return <Car car={x} />;
  });

  return <div>{list}</div>;
};

export default Cars;
