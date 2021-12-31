import axios, { AxiosRequestConfig } from "axios";
import { api, baseURL } from "../api";

type Props = {
  id?: string;
  name: string;
};

export const createModule = async ({ name }: Props) => {
  const token = localStorage.getItem("token");

  const config: AxiosRequestConfig = {
    method: 'POST',
    url: `${baseURL}modules`,
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    data: { name },
  }

  const { data } = await axios.request(config)
  return { data, error: data?.name ? false : true };
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

export const getByIdModule = async (id: number) => {
  const token = localStorage.getItem("token");
  const res = await api.get(`/modules/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const { data } = res;
  return { data, error: data?.email ? false : true };
};

export const editByIdModule = async ({ id, name }: Props) => {
  const token = localStorage.getItem("token");

  const config: AxiosRequestConfig = {
    method: 'PUT',
    url: `${baseURL}modules/${id}`,
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    data: { name },
  }

  const { data } = await axios.request(config)
  return { data, error: data?.name ? false : true };
};

export const deleteByIdModule = async (id: number) => {
  const token = localStorage.getItem("token");

  const config: AxiosRequestConfig = {
    method: 'DELETE',
    url: `${baseURL}modules/${id}`,
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    }
  }

  const { data } = await axios.request(config)
  return { data, error: data?.name ? false : true };
};
