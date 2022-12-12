import axios from 'axios';
import { API_URL } from './config';
import { TokenProvider } from './layouts/AuthLayout/utils/token';

const instance = axios.create({
  baseURL: API_URL,
  validateStatus: () => true,
});

instance.interceptors.request.use((req) => {
  req.headers.Authorization = `Bearer ${TokenProvider.getAccessToken()}`;
  return req;
});

export default instance;