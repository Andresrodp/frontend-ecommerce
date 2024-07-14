import axios from "axios";

const axiosIntance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL_LOCAL,
  timeout: 10000,
});

export default axiosIntance;
