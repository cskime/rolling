import axios from "axios";

const timeout = 5000;

const baseClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout,
});

const apiClient = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/18-3`,
  timeout,
});

export { apiClient, baseClient };
