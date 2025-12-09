export interface Complaint {
  id: string;
  name: string;
  complaintType: string;
  complaintImage?: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ComplaintResponse<T = any> {
  success: boolean;
  message?: string;
  data?: T;
  count?: number;
}

