// Allow overriding the API base via Vite env (useful for different hosts)
const API_BASE = import.meta.env.VITE_API_BASE ?? 'http://localhost:8000/api/processor'

type RequestOptions = RequestInit & { token?: string }

async function request<T>(path: string, options: RequestOptions = {}): Promise<T> {
  const { token, headers, ...rest } = options
  const response = await fetch(`${API_BASE}${path}`, {
    ...rest,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(headers ?? {})
    }
  })

  const data = await response.json().catch(() => undefined)
  if (!response.ok) {
    const message = (data as { msg?: string })?.msg ?? 'Request failed'
    throw new Error(message)
  }

  return data as T
}

export type Inventory = {
  _id: string
  inventoryName: string
  assignedGrade: string
  processinglist?: string
  specie: string
  finalQuantity: string
  sendedToLab?: string
  Items?: FarmerInput[]
}

export type FarmerInput = {
  _id: string
  inventoryID: string
  quantity: string
  eventId: string
  specie?: string
}

export async function login(email: string, password: string): Promise<string> {
  const res = await request<{ token: string }>('/auth/login', {
    method: 'POST',
    body: JSON.stringify({ email, password })
  })
  return res.token
}

export async function listInventories(token: string): Promise<Inventory[]> {
  const res = await request<{ data: Inventory[] }>('/inventory', { token })
  return res.data
}

export async function createInventory(payload: Omit<Inventory, '_id' | 'Items'>, token: string): Promise<void> {
  await request('/inventory', {
    method: 'POST',
    body: JSON.stringify(payload),
    token
  })
}

export async function getInventory(id: string, token: string): Promise<Inventory> {
  const res = await request<{ data: Inventory }>(`/inventory/${id}`, { token })
  return res.data
}

export async function listFarmerInputs(inventoryId: string, token: string): Promise<FarmerInput[]> {
  const res = await request<{ data: FarmerInput[] }>(`/farmer-input/inventory/${inventoryId}`, { token })
  return res.data
}

export async function getFarmerInputByEvent(eventId: string, token: string): Promise<FarmerInput> {
  const res = await request<{ data: FarmerInput }>(`/farmer-input/event/${eventId}`, { token })
  return res.data
}

export async function addFarmerInput(
  payload: Omit<FarmerInput, '_id'>,
  token: string
): Promise<FarmerInput> {
  const res = await request<{ data: FarmerInput }>('/farmer-input', {
    method: 'POST',
    body: JSON.stringify(payload),
    token
  })
  return res.data
}

