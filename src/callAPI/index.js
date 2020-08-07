import axios from "axios";

import * as config from "./config";

export const API = (endpoint, method = "GET", body) => {
  return axios({
    method: method,
    url: `${config.REACT_URL_API}/${endpoint}`,
    data: body,
    withCredentials: true,
  }).catch((err) => {
    throw err;
  });
};

export const AuthenticationAPI = (endpoint, method = "GET", body) => {
  return axios({
    method: method,
    url: `${config.REACT_URL_AUTHENTICATION}/${endpoint}`,
    data: body,
    withCredentials: true,
  }).catch((err) => {
    throw err;
  });
};
