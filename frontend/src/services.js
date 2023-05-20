import axios from 'axios';

export const calculateNetWorth = (data) =>
  axios.post(`${import.meta.env.VITE_API_URL}/operations/net-worth`, data);
