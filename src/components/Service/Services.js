import React, { useEffect, useState } from "react";
import axios from "axios";

import { baseUrl } from "../..";
import Cars from "../Car/Cars";

const Service = (props) => {
  const [serviceList, setServiceList] = useState([]);

  useEffect(() => {
    const url = baseUrl + "service";
    const getServices = async () => {
      const response = await axios(url);
      console.log(response.data);
      setServiceList(response.data);
    };
    getServices();
  }, []);

  const list = serviceList.map((x) => {
    return (
      <div>
        Name: {x.name}, Maximum capacity: {x.maxCapacity},
        <Cars carList={x.cars} />
      </div>
    );
  });

  return <div>{list}</div>;
};

export default Service;
