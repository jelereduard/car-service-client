import axios from "axios";
import { baseUrl } from "../..";

import * as actionTypes from "./actionTypes";

export const fetchServicesStart = () => {
  return {
    type: actionTypes.FETCH_SERVICES_START,
  };
};

export const fetchServicesSuccess = (services) => {
  return {
    type: actionTypes.FETCH_SERVICES_SUCCESS,
    services: services,
  };
};

export const fetchServicesFail = (error) => {
  return {
    type: actionTypes.FETCH_SERVICES_FAIL,
    error: error,
  };
};

export const fetchServices = () => {
  return (dispatch) => {
    axios
      .get(baseUrl + "service")
      .then((response) => {
        const fetchedServices = [];
        for (let key in response.data) {
          fetchedServices.push({
            ...response.data[key],
            id: parseInt(key) + 1,
          });
        }
        dispatch(fetchServicesSuccess(fetchedServices));
      })
      .catch((error) => {
        dispatch(fetchServicesFail(error));
      });
  };
};
