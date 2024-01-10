import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 20000,
  headers: {},
});

const AxiosInstanceFormData = axios.create({
  baseURL: BASE_URL,
  timeout: 30000,
  headers: { "Content-Type": "multipart/form-data" },
});

export { AxiosInstance, AxiosInstanceFormData };
