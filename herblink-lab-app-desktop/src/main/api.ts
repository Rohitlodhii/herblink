import axios from 'axios';
import keytar from 'keytar';

// API base URL - matches backend route structure
const API_BASE_URL = 'http://localhost:8000/api/lab';

const AUTH_SERVICE = 'herblink-lab-app';
const AUTH_ACCOUNT = 'lab-user';

// Helper to get token from keytar
export const getToken = async (): Promise<string | null> => {
  try {
    const token = await keytar.getPassword(AUTH_SERVICE, AUTH_ACCOUNT);
    return token;
  } catch (error) {
    return null;
  }
};

// Helper to create authenticated API client
const createAuthenticatedClient = async () => {
  const token = await getToken();
  
  return axios.create({
    baseURL: API_BASE_URL,
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    timeout: 10000,
    validateStatus: (status) => status < 500, // Don't throw on 4xx errors, we'll handle them
  });
};

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
  // Electron main process doesn't have CORS restrictions, but ensure proper config
  validateStatus: (status) => status < 500, // Don't throw on 4xx errors, we'll handle them
});

export type LoginPayload = {
  email: string;
  password: string;
};

export type LoginResponse = {
  msg: string;
  token: string;
};

export const loginRequest = async ({
  email,
  password,
}: LoginPayload): Promise<LoginResponse> => {
  try {
    // Endpoint: /auth/login
    // Full URL: http://localhost:8000/api/lab/auth/login
    const response = await apiClient.post<LoginResponse>('/auth/login', {
      email,
      password,
    });

    // Check for error status codes (4xx)
    if (response.status >= 400) {
      const errorMessage = response.data?.msg || `Request failed with status ${response.status}`;
      throw new Error(errorMessage);
    }

    const { data } = response;

    if (!data?.token) {
      throw new Error('Token missing in response.');
    }

    return data;
  } catch (error) {
    // Handle axios errors and extract backend error message
    if (axios.isAxiosError(error)) {
      // Network errors (connection refused, timeout, etc.)
      if (error.code === 'ECONNREFUSED' || error.code === 'ETIMEDOUT') {
        throw new Error('Unable to connect to server. Please ensure the backend is running on http://localhost:8000');
      }
      
      // Extract backend error message from response
      const errorMessage = error.response?.data?.msg || error.message || 'Login failed.';
      throw new Error(errorMessage);
    }
    // Re-throw non-axios errors as-is
    throw error;
  }
};

// Lab Processor Input Types
export type LabProcessorInputPayload = {
  processorInventoryId: string;
  reportpath?: string;
  description?: string;
  isDone?: boolean;
};

export type LabProcessorInputUpdatePayload = {
  reportpath?: string;
  description?: string;
  isDone?: boolean;
};

export type LabProcessorInput = {
  id: string;
  processorInventoryId: string;
  reportpath?: string | null;
  description?: string | null;
  isDone: boolean;
  createdAt?: string;
  updatedAt?: string;
};

export type ApiResponse<T> = {
  data: T | null;
  error: string | null;
};

// Helper to handle API responses and errors
// Backend returns: { msg: "...", data: ... }
const handleApiResponse = <T>(response: any): ApiResponse<T> => {
  if (response.status === 401) {
    return { data: null, error: 'UNAUTHORIZED' };
  }
  
  if (response.status >= 400) {
    const errorMessage = response.data?.msg || response.data?.message || `Request failed with status ${response.status}`;
    return { data: null, error: errorMessage };
  }

  // Backend returns: { msg: "...", data: ... }
  // Extract the data property from response.data
  let responseData = response.data?.data || response.data;
  
  // Log for debugging
  console.log('API Response:', {
    status: response.status,
    rawData: response.data,
    extractedData: responseData,
    dataType: typeof responseData,
    isArray: Array.isArray(responseData),
  });
  
  // Ensure arrays are properly handled
  if (Array.isArray(responseData)) {
    return { data: responseData as unknown as T, error: null };
  }
  
  // For single objects, return as is
  if (responseData && typeof responseData === 'object') {
    return { data: responseData as T, error: null };
  }

  return { data: responseData as T, error: null };
};

// POST: Add Lab Processor Input
export const addLabProcessorInput = async (
  payload: LabProcessorInputPayload
): Promise<ApiResponse<LabProcessorInput>> => {
  try {
    const client = await createAuthenticatedClient();
    const response = await client.post<LabProcessorInput>('/processor-input', payload);
    return handleApiResponse<LabProcessorInput>(response);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.code === 'ECONNREFUSED' || error.code === 'ETIMEDOUT') {
        return { data: null, error: 'Unable to connect to server.' };
      }
      if (error.response?.status === 401) {
        return { data: null, error: 'UNAUTHORIZED' };
      }
      const errorMessage = error.response?.data?.msg || error.response?.data?.message || error.message;
      return { data: null, error: errorMessage };
    }
    return { data: null, error: 'Unexpected error occurred.' };
  }
};

// GET: List All Lab Processor Inputs
export const listLabProcessorInputs = async (): Promise<ApiResponse<LabProcessorInput[]>> => {
  try {
    const client = await createAuthenticatedClient();
    const response = await client.get<LabProcessorInput[]>('/processor-input');
    return handleApiResponse<LabProcessorInput[]>(response);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.code === 'ECONNREFUSED' || error.code === 'ETIMEDOUT') {
        return { data: null, error: 'Unable to connect to server.' };
      }
      if (error.response?.status === 401) {
        return { data: null, error: 'UNAUTHORIZED' };
      }
      const errorMessage = error.response?.data?.msg || error.response?.data?.message || error.message;
      return { data: null, error: errorMessage };
    }
    return { data: null, error: 'Unexpected error occurred.' };
  }
};

// GET: List Pending Lab Processor Inputs (without report)
export const listPendingLabProcessorInputs = async (): Promise<ApiResponse<LabProcessorInput[]>> => {
  try {
    const client = await createAuthenticatedClient();
    // Backend route: listLabProcessorInputsWithoutReport
    // Assuming route is /processor-input/without-report or /processor-input/pending
    const response = await client.get<LabProcessorInput[]>('/processor-input/without-report');
    return handleApiResponse<LabProcessorInput[]>(response);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.code === 'ECONNREFUSED' || error.code === 'ETIMEDOUT') {
        return { data: null, error: 'Unable to connect to server.' };
      }
      if (error.response?.status === 401) {
        return { data: null, error: 'UNAUTHORIZED' };
      }
      const errorMessage = error.response?.data?.msg || error.response?.data?.message || error.message;
      return { data: null, error: errorMessage };
    }
    return { data: null, error: 'Unexpected error occurred.' };
  }
};

// PUT: Update Lab Processor Input
export const updateLabProcessorInput = async (
  id: string,
  payload: LabProcessorInputUpdatePayload
): Promise<ApiResponse<LabProcessorInput>> => {
  try {
    const client = await createAuthenticatedClient();
    const response = await client.put<LabProcessorInput>(`/processor-input/${id}`, payload);
    return handleApiResponse<LabProcessorInput>(response);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.code === 'ECONNREFUSED' || error.code === 'ETIMEDOUT') {
        return { data: null, error: 'Unable to connect to server.' };
      }
      if (error.response?.status === 401) {
        return { data: null, error: 'UNAUTHORIZED' };
      }
      const errorMessage = error.response?.data?.msg || error.response?.data?.message || error.message;
      return { data: null, error: errorMessage };
    }
    return { data: null, error: 'Unexpected error occurred.' };
  }
};

