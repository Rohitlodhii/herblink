import { Platform } from "react-native";

const LOCAL_NETWORK_IP = "192.168.1.2";

const buildBaseUrl = () =>
  Platform.OS === "android"
    ? `http://${LOCAL_NETWORK_IP}:8000/api/farmer`
    : `http://${LOCAL_NETWORK_IP}:8000/api/farmer`;

export const ROOT_API_URL = buildBaseUrl();
export const AUTH_API_BASE_URL = `${ROOT_API_URL}/auth`;
export const HERB_API_BASE_URL = `${ROOT_API_URL}/herbs`;


