import React from "react";
import axios from "axios";
import { useLocation } from "react-router";
import { useEffect, useState } from "react/cjs/react.development";

import { baseUrl } from "../..";
import Car from "../Car/Car";

export const Service = () => {
  const { state } = useLocation();
  const { id } = state;
  const [service, setService] = useState([]);
  useEffect(() => {
    const url = baseUrl + "service/" + 1;
    const getService = async () => {
      const response = await axios(url);
      setService(response.data);
    };
    getService();
  }, [id]);

  useEffect(() => {
    console.log(service);
    // updateCarList();
  }, [service]);

  let carsInService;
  const updateCarList = () => {
    carsInService = service.cars.map((car, key) => {
      return (
        <div key={key}>
          <Car car={car} />
        </div>
      );
    });
  };

  return (
    <div>
      <div className="service-name">{service.name}</div>
      <div className="service-capacity">
        {service.noCars}/{service.maxCapacity}
      </div>
      <button onClick={() => console.log(service)}>SERVICE</button>
      <div>{carsInService}</div>
    </div>
  );
};
