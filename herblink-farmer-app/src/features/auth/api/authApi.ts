import { Platform } from "react-native";

const LOCAL_NETWORK_IP = "192.168.1.2";

const API_BASE_URL =
  Platform.OS === "android"
    ? `http://${LOCAL_NETWORK_IP}:8000/api/farmer/auth`
    : `http://${LOCAL_NETWORK_IP}:8000/api/farmer/auth`;

type ApiError = {
  message?: string;
  msg?: string;
};

type VerifyResponse = {
  token: string;
};

const isApiError = (value: unknown): value is ApiError =>
  typeof value === "object" &&
  value !== null &&
  (("message" in value && typeof (value as ApiError).message === "string") ||
    ("msg" in value && typeof (value as ApiError).msg === "string"));

const handleResponse = async <T>(response: Response): Promise<T> => {
  const text = await response.text();
  const data = text ? (JSON.parse(text) as T | ApiError) : ({} as T);

  if (!response.ok) {
    const message =
      isApiError(data) && (data.message || data.msg)
        ? data.message ?? data.msg ?? "Something went wrong. Please try again."
        : "Something went wrong. Please try again.";
    throw new Error(message);
  }

  return data as T;
};

export const requestOtp = async (phoneNumber: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ mobileNumber: phoneNumber }),
    });

    return handleResponse<{ success?: boolean; msg?: string }>(response);
  } catch (error) {
    console.error("Failed to request OTP", error);
    if (error instanceof Error) {
      throw new Error(error.message || "Failed to request OTP. Please try again.");
    }
    throw new Error("Failed to request OTP. Please try again.");
  }
};

export const verifyOtp = async (phoneNumber: string, otp: string) => {
  const response = await fetch(`${API_BASE_URL}/verifyOtp`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ mobileNumber:phoneNumber, otp }),
  });

  return handleResponse<VerifyResponse>(response);
};

