import axios from "axios";

const axiosApiClient = axios.create({
  baseURL: process.env.REACT_APP_API_BASEURL,
});

export { axiosApiClient };
