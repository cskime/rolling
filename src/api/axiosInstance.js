import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://rolling-api.vercel.app/',
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' },
});

export default axiosInstance;