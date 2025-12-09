import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { addComplaint, complaints } from "./store";
import { ComplaintResponse } from "@/types/complaint";

const createComplaintSchema = z.object({
  name: z.string().min(1, "Name is required"),
  complaintType: z.string().min(1, "Complaint type is required"),
  complaintImage: z.string().url("Invalid complaint image URL").optional(),
  description: z.string().optional(),
});

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json<ComplaintResponse>(
      { success: false, message: "Invalid JSON payload" },
      { status: 400 }
    );
  }

  const parsed = createComplaintSchema.safeParse(body);
  if (!parsed.success) {
    const message = parsed.error.errors.map((e) => e.message).join(", ");
    return NextResponse.json<ComplaintResponse>({ success: false, message }, { status: 400 });
  }

  const record = addComplaint(parsed.data);
  return NextResponse.json<ComplaintResponse>({ success: true, message: "Complaint created", data: record }, { status: 201 });
}

export async function GET() {
  const data = [...complaints].sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
  return NextResponse.json<ComplaintResponse>({ success: true, count: data.length, data }, { status: 200 });
}

