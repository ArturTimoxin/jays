import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3001",
});

API.interceptors.request.use(
  function(config) {
    return config;
  },
  function(error) {
    return Promise.reject(error);
  },
);

API.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    return Promise.reject(error);
  },
);

export default API;
