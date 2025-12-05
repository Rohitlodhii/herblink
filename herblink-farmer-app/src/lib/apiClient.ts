type ApiError = {
  message?: string;
  msg?: string;
};

const isApiError = (value: unknown): value is ApiError =>
  typeof value === "object" &&
  value !== null &&
  (("message" in value && typeof (value as ApiError).message === "string") ||
    ("msg" in value && typeof (value as ApiError).msg === "string"));

export const handleResponse = async <T>(response: Response): Promise<T> => {
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


