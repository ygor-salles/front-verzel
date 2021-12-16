import { api } from "../api";

type Props = {
  name?: string;
  email: string;
  password: string;
};
export const createUser = async ({ name, email, password }: Props) => {
  const res = await api.post("/users", { name, email, password });
  const { data } = res;

  return { data, error: data?.email ? false : true };
};

export const login = async ({ email, password }: Props) => {
  const res = await api.post("/login", { email, password });
  const { data } = res;
  return { data, error: data?.token ? false : true };
};
