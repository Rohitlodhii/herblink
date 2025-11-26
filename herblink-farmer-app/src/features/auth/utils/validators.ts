export const normalizePhoneNumber = (value: string) =>
  value.replace(/[^\d]/g, "");

export const isValidPhoneNumber = (value: string) => {
  const cleaned = normalizePhoneNumber(value);
  return cleaned.length >= 10 && cleaned.length <= 13;
};

export const isValidOtp = (value: string) => /^\d{4,6}$/.test(value);

