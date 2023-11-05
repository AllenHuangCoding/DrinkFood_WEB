import axios from "axios";
import { GET } from "./HttpClient";

// interface AxiosInstance {
//   GET(url: string): string;
// }
// axios.AxiosInstance.prototype.GET = GET;

const axiosApiClient = axios.create({
  baseURL: process.env.REACT_APP_API_BASEURL,
});

const axiosLocalClient = axios.create({
  baseURL: process.env.REACT_APP_LOCAL_BASEURL,
});

export { axiosApiClient, axiosLocalClient };
