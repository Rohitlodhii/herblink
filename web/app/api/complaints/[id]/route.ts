import { NextRequest, NextResponse } from "next/server";
import { getComplaint } from "../store";
import { ComplaintResponse } from "@/types/complaint";

export async function GET(
  _req: NextRequest,
  context: { params: { id: string } }
) {
  const { id } = context.params;
  const complaint = getComplaint(id);

  if (!complaint) {
    return NextResponse.json<ComplaintResponse>(
      { success: false, message: "Complaint not found" },
      { status: 404 }
    );
  }

  return NextResponse.json<ComplaintResponse>({ success: true, data: complaint }, { status: 200 });
}

