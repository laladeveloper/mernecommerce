// api.js
import axios from 'axios';

const axiosInstance  = axios.create({
  baseURL: 'http://localhost:3005',
  withCredentials: true // Set this to your backend URL
});

export default axiosInstance;
