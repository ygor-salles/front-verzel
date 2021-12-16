import axios, { AxiosRequestConfig } from "axios";
import { api, baseUrl } from "../api";

type Props = {
  name: string;
};

export const getAllModules = async () => {
  const token = localStorage.getItem("token");
  const res = await api.get("/modules", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const { data } = res;
  return { data, error: data?.email ? false : true };
};

export const createModule = async ({ name }: Props) => {
  const token = localStorage.getItem("token");

  const config: AxiosRequestConfig = {
    method: 'POST',
    url: `${baseUrl}modules`,
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    data: { name },
  }

  const { data } = await axios.request(config)
  return { data, error: data?.name ? false : true };
};