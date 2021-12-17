import axios, { AxiosRequestConfig } from "axios";
import { baseUrl } from "../api";

type Props = {
  id?: number;
  name: string;
  date_lesson: string | Date;
  module_id: number;
  link: string;
  description: string;
};

export const createLesson = async ({ name, date_lesson, module_id, link, description }: Props) => {
  const token = localStorage.getItem("token");

  const config: AxiosRequestConfig = {
    method: 'POST',
    url: `${baseUrl}lessons`,
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    data: { name, date_lesson, module_id, link, description },
  }

  const { data } = await axios.request(config)
  return { data, error: data?.name ? false : true };
};

export const getAllLessons = async () => {
    const token = localStorage.getItem('token');

    const config: AxiosRequestConfig = {
        method: 'GET',
        url: `${baseUrl}lessons`,
        headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        },
    }

    const { data } = await axios.request(config);
    return data;
}

export const getByIdLesson = async (id: number) => {
  const token = localStorage.getItem("token");

  const config: AxiosRequestConfig = {
    method: 'GET',
    url: `${baseUrl}lessons/${id}`,
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  }
  
  const { data } = await axios.request(config)
  return { data, error: data?.name ? false : true };
};

export const editByIdLesson = async ({ id, name, date_lesson, module_id, link, description }: Props) => {
  const token = localStorage.getItem("token");

  const config: AxiosRequestConfig = {
    method: 'PUT',
    url: `${baseUrl}lessons/${id}`,
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    data: { name, date_lesson, module_id, link, description },
  }

  const { data } = await axios.request(config)
  return { data, error: data?.name ? false : true };
};
  
export const deleteByIdLesson = async (id: number) => {
  const token = localStorage.getItem("token");

  const config: AxiosRequestConfig = {
    method: 'DELETE',
    url: `${baseUrl}lessons/${id}`,
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    }
  }

  const { data } = await axios.request(config)
  return { data, error: data?.name ? false : true };
};