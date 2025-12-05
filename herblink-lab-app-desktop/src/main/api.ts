import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8000/api/lab',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

export type LoginPayload = {
  email: string;
  password: string;
};

export type LoginResponse = {
  token: string;
};

export const loginRequest = async ({
  email,
  password,
}: LoginPayload): Promise<LoginResponse> => {
  const { data } = await apiClient.post<LoginResponse>('/login', {
    email,
    password,
  });

  if (!data?.token) {
    throw new Error('Token missing in response.');
  }

  return data;
};

