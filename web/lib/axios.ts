"use client";

import axios from "axios";
import { Auth } from "./auth";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  console.log("[Axios] ===== REQUEST INTERCEPTOR =====");
  console.log("[Axios] Base URL:", process.env.NEXT_PUBLIC_API_URL);
  console.log("[Axios] Request URL:", config.url);
  console.log("[Axios] Full URL:", `${config.baseURL}${config.url}`);
  console.log("[Axios] Method:", config.method?.toUpperCase());
  console.log("[Axios] Request data:", config.data);
  console.log("[Axios] Request headers:", config.headers);
  
  const token = Auth.getToken();  // READ FROM LOCALSTORAGE
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
    console.log("[Axios] Token added to headers");
  } else {
    console.log("[Axios] No token found in localStorage");
  }
  
  console.log("[Axios] ===== REQUEST INTERCEPTOR END =====");
  return config;
}, (error) => {
  console.error("[Axios] Request interceptor error:", error);
  return Promise.reject(error);
});

api.interceptors.response.use((response) => {
  console.log("[Axios] ===== RESPONSE INTERCEPTOR =====");
  console.log("[Axios] Response status:", response.status);
  console.log("[Axios] Response data:", response.data);
  console.log("[Axios] ===== RESPONSE INTERCEPTOR END =====");
  return response;
}, (error) => {
  console.error("[Axios] ===== RESPONSE ERROR INTERCEPTOR =====");
  console.error("[Axios] Error occurred:", error);
  console.error("[Axios] Error message:", error?.message);
  console.error("[Axios] Error response:", error?.response);
  console.error("[Axios] Error request:", error?.request);
  console.error("[Axios] Error config:", error?.config);
  console.error("[Axios] ===== RESPONSE ERROR INTERCEPTOR END =====");
  return Promise.reject(error);
});

export default api;
