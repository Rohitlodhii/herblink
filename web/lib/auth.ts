"use client";

export const Auth = {
  setToken(token: string) {
    localStorage.setItem("token", token);
  },

  getToken() {
    return localStorage.getItem("token");
  },

  clearToken() {
    localStorage.removeItem("token");
  }
};
