import { Complaint, ComplaintResponse } from "@/types/complaint";

const BASE_PATH = "/api/complaints";

const parseError = async (res: Response) => {
  try {
    const data = (await res.json()) as ComplaintResponse;
    return data?.message || "Request failed";
  } catch {
    return res.statusText || "Request failed";
  }
};

export class ComplaintService {
  static async create(payload: Omit<Complaint, "id" | "createdAt" | "updatedAt">) {
    const res = await fetch(BASE_PATH, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      throw new Error(await parseError(res));
    }

    return (await res.json()) as ComplaintResponse<Complaint>;
  }

  static async list() {
    const res = await fetch(BASE_PATH, { cache: "no-store" });
    if (!res.ok) {
      throw new Error(await parseError(res));
    }
    return (await res.json()) as ComplaintResponse<Complaint[]>;
  }

  static async get(id: string) {
    const res = await fetch(`${BASE_PATH}/${encodeURIComponent(id)}`, { cache: "no-store" });
    if (!res.ok) {
      throw new Error(await parseError(res));
    }
    return (await res.json()) as ComplaintResponse<Complaint>;
  }
}

