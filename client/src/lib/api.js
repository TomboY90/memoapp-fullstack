import axios from 'axios';

const baseURL = 'http://localhost:3001';

export const apiClient = axios.create({
  baseURL
});