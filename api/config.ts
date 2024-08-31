import axios from 'axios';

// Base URL for your backend server
const BASE_URL = 'http://localhost:5000/api'; // Replace with your backend server URL

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
