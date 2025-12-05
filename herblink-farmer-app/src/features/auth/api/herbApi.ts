import { HERB_API_BASE_URL } from "../../../config/network";
import { handleResponse } from "../../../lib/apiClient";

export type HerbPayload = {
  herbname: string;
  harvestDate: string;
  coordinates: string;
  pesticidesUsed: boolean;
  quantity: string;
  desc: string;
};

export type Herb = {
  id: string;
  herbname: string;
  harvestDate: string;
  coordinates: string;
  pesticidesUsed: boolean;
  quantity: string;
  desc: string;
  farmerID: string;
};

export type AddHerbResponse = {
  msg: string;
  data: Herb;
};

export const addHerb = async (payload: HerbPayload, token?: string | null) => {
  const response = await fetch(HERB_API_BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: JSON.stringify(payload),
  });

  return handleResponse<AddHerbResponse>(response);
};


