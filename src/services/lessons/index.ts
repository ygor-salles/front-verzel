import axios, { AxiosRequestConfig } from "axios";
import { baseUrl } from "../api";

type Props = {
  name: string;
  date_lesson: string;
  module_id: number;
  link: string;
  description: string;
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
    console.log('DATAAA', data);
    return data;
}

export const createLesson = async ({ name, date_lesson, module_id, link, description }: Props) => {
    const token = localStorage.getItem("token");
  
    const config: AxiosRequestConfig = {
      method: 'POST',
      url: `${baseUrl}modules`,
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      data: { name, date_lesson, module_id, link, description },
    }
  
    const { data } = await axios.request(config)
    return { data, error: data?.name ? false : true };
  };