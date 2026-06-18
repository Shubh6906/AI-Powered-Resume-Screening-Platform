import api from "../lib/api";
import { saveToken } from "../lib/auth";

export async function loginUser(
  email: string,
  password: string
) {
  const response = await api.post(
    "/auth/login",
    {
      email,
      password,
    }
  );

  saveToken(
    response.data.access_token
  );

  return response.data;
}


export async function registerUser(
  full_name: string,
  email: string,
  password: string,
  role: string
) {
  const response = await api.post(
    "/auth/register",
    {
      full_name,
      email,
      password,
      role,
    }
  );

  return response.data;
}


export async function getCurrentUser() {
  const response = await api.get(
    "/auth/me"
  );

  return response.data;
}