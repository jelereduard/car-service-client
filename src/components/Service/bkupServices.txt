import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { baseUrl } from "../..";
import Cars from "../Car/Cars";

import "./Services.scss";

const Services = () => {
  const [serviceList, setServiceList] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const url = baseUrl + "service";
    const getServices = async () => {
      const response = await axios(url);
      console.log(response.data);
      setServiceList(response.data);
    };
    getServices();
  }, []);

  const onServiceNameClicked = (id) => {
    console.log("service name clicked: " + id);
    navigate("/service", { state: { id: id } });
  };

  const list = serviceList.map((service) => {
    const noCars = (
      <span
        style={service.noCars < 8 ? { color: "#8bd962" } : { color: "#d92d1a" }}
      >
        {service.noCars}
      </span>
    );
    return (
      <tr key={service.id}>
        <td
          className="serviceName"
          onClick={(id) => onServiceNameClicked(service.id)}
        >
          {service.name}
        </td>
        <td className="center">
          {noCars}/{service.maxCapacity}
        </td>
        <td>
          <Cars carList={service.cars} />
        </td>
      </tr>
    );
  });

  return (
    <div className="body">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Capacity</th>
            <th>Cars</th>
          </tr>
        </thead>
        <tbody>{list}</tbody>
      </table>
    </div>
  );
};

export default Services;
