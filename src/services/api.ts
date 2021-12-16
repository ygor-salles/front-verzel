import axios from "axios";

const api = axios.create({
  baseURL: "https://app-verzel.herokuapp.com/",
});

const baseUrl = 'https://app-verzel.herokuapp.com/';

export { api, baseUrl };
