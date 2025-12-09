import { randomUUID } from "crypto";
import { Complaint } from "@/types/complaint";

// Simple in-memory store for demo purposes. Replace with Prisma in production.
export const complaints: Complaint[] = [];

export const addComplaint = (payload: Omit<Complaint, "id" | "createdAt" | "updatedAt">): Complaint => {
  const now = new Date().toISOString();
  const record: Complaint = {
    id: randomUUID(),
    createdAt: now,
    updatedAt: now,
    ...payload,
  };
  complaints.unshift(record); // keep newest first
  return record;
};

export const getComplaint = (id: string) => complaints.find((item) => item.id === id);

