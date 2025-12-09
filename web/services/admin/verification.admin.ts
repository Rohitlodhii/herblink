import api from "@/lib/axios";

type EntityType = "farmers" | "labs" | "processors" | "manufacturers";

export class AdminVerificationService {
  static async listNotVerified(entity: EntityType) {
    const res = await api.get(`/admin/${entity}/not-verified`);
    return res.data;
  }

  static async verify(entity: EntityType, id: string) {
    const res = await api.post(`/admin/${entity}/${id}/verify`);
    return res.data;
  }

  static async reject(entity: EntityType, id: string) {
    const res = await api.post(`/admin/${entity}/${id}/reject`);
    return res.data;
  }
}

