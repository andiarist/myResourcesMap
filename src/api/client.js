import axios from 'axios';

const { REACT_APP_API_BASE_URL: baseURL } = process.env;

const client = axios.create({
  baseURL,
});

client.interceptors.response.use(response => response.data);

export default client;
