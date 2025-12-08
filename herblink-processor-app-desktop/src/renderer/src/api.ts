// Remote API wiring is commented out to allow fully local storage
// const API_BASE = import.meta.env.VITE_API_BASE ?? 'http://localhost:8000/api/processor'
// type RequestOptions = RequestInit & { token?: string }
// async function request<T>(path: string, options: RequestOptions = {}): Promise<T> {
//   const { token, headers, ...rest } = options
//   const response = await fetch(`${API_BASE}${path}`, {
//     ...rest,
//     headers: {
//       'Content-Type': 'application/json',
//       ...(token ? { Authorization: `Bearer ${token}` } : {}),
//       ...(headers ?? {})
//     }
//   })
//   const data = await response.json().catch(() => undefined)
//   if (!response.ok) {
//     const message = (data as { msg?: string })?.msg ?? 'Request failed'
//     throw new Error(message)
//   }
//   return data as T
// }

// Local "DB" keys
const INVENTORY_KEY = 'local:inventories'
const INPUT_KEY = 'local:farmerInputs'

function readInventories(): Inventory[] {
  const raw = localStorage.getItem(INVENTORY_KEY)
  if (!raw) return []
  try {
    return JSON.parse(raw) as Inventory[]
  } catch {
    return []
  }
}

function writeInventories(data: Inventory[]): void {
  localStorage.setItem(INVENTORY_KEY, JSON.stringify(data))
}

function readInputs(): FarmerInput[] {
  const raw = localStorage.getItem(INPUT_KEY)
  if (!raw) return []
  try {
    return JSON.parse(raw) as FarmerInput[]
  } catch {
    return []
  }
}

function writeInputs(data: FarmerInput[]): void {
  localStorage.setItem(INPUT_KEY, JSON.stringify(data))
}

function makeId(prefix: string): string {
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(16).slice(2, 8)}`
}

export type Inventory = {
  _id: string
  inventoryName: string
  assignedGrade: string
  processinglist?: string
  specie: string
  finalQuantity?: string
  sendedToLab?: string
  Items?: FarmerInput[]
  moisture?: string
  soilType?: string
  waterType?: string
  season?: string
  location?: string
  harvestingTime?: string
  fertiliserType?: string
}

export type FarmerInput = {
  _id: string
  inventoryID: string
  quantity: string
  eventId: string
  specie?: string
}

export async function login(email: string, password: string): Promise<string> {
  // return request<{ token: string }>('/auth/login', {
  //   method: 'POST',
  //   body: JSON.stringify({ email, password })
  // }).then((res) => res.token)
  if (email === 'rohitlodhi9090@gmail.com' && password === '12121212') {
    return Promise.resolve('local-sample-jwt')
  }
  return Promise.reject(new Error('Invalid credentials'))
}

export async function listInventories(token: string): Promise<Inventory[]> {
  token // token unused but kept for parity
  return readInventories()
}

export async function createInventory(payload: Omit<Inventory, '_id' | 'Items'>, token: string): Promise<void> {
  token
  const existing = readInventories()
  const next: Inventory = { _id: makeId('inv'), Items: [], ...payload }
  writeInventories([next, ...existing])
}

export async function getInventory(id: string, token: string): Promise<Inventory> {
  token
  const inv = readInventories().find((item) => item._id === id)
  if (!inv) throw new Error('Inventory not found')
  return inv
}

export async function listFarmerInputs(inventoryId: string, token: string): Promise<FarmerInput[]> {
  token
  return readInputs().filter((input) => input.inventoryID === inventoryId)
}

export async function getFarmerInputByEvent(eventId: string, token: string): Promise<FarmerInput> {
  token
  const found = readInputs().find((input) => input.eventId === eventId)
  if (!found) throw new Error('Farmer input not found')
  return found
}

export async function addFarmerInput(
  payload: Omit<FarmerInput, '_id'>,
  token: string
): Promise<FarmerInput> {
  token
  const existing = readInputs()
  const created: FarmerInput = { _id: makeId('fin'), ...payload }
  writeInputs([created, ...existing])
  return created
}

export async function deleteFarmerInput(inputId: string, token: string): Promise<void> {
  token
  const existing = readInputs()
  const next = existing.filter((item) => item._id !== inputId)
  if (next.length === existing.length) throw new Error('Farmer input not found')
  writeInputs(next)
}

export async function deleteInventory(id: string, token: string): Promise<void> {
  token
  const inventories = readInventories()
  const nextInventories = inventories.filter((inv) => inv._id !== id)
  if (nextInventories.length === inventories.length) throw new Error('Inventory not found')
  writeInventories(nextInventories)
  // Remove associated farmer inputs
  const remainingInputs = readInputs().filter((input) => input.inventoryID !== id)
  writeInputs(remainingInputs)
}

