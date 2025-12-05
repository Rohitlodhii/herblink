import { AUTH_API_BASE_URL } from "../../../config/network";
import { handleResponse } from "../../../lib/apiClient";

type VerifyResponse = {
  token: string;
};

export const requestOtp = async (phoneNumber: string) => {
  try {
    const response = await fetch(`${AUTH_API_BASE_URL}/login`, {
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
  const response = await fetch(`${AUTH_API_BASE_URL}/verifyOtp`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ mobileNumber:phoneNumber, otp }),
  });

  return handleResponse<VerifyResponse>(response);
};

