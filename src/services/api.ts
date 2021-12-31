import axios from "axios";

const reactEnv = process.env.REACT_APP_ENV;
const baseURL = reactEnv === 'development' ? process.env.REACT_APP_URL_LOCAL : process.env.REACT_APP_URL_PROD;

const api = axios.create({
  baseURL
});

export { api, baseURL };
