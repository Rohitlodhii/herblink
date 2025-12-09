// Helper to handle logout on 401
function handleUnauthorized(): void {
  localStorage.removeItem('token')
  window.location.href = '/'
}

export type Inventory = {
  _id?: string
  id?: string
  inventoryName: string
  assignedGrade: string
  specie: string
  moisture?: string | null
  soilType?: string | null
  WaterType?: string | null // Note: capital W and T to match backend
  Season?: string | null // Note: capital S to match backend
  Location?: string | null // Note: capital L to match backend
  finalQuantity?: string
  sendedToLab?: string
  isprocessingDone?: boolean
  Items?: FarmerInput[]
  processinglist?: string
  waterType?: string // Legacy lowercase for compatibility
  season?: string // Legacy lowercase for compatibility
  location?: string // Legacy lowercase for compatibility
  harvestingTime?: string
  fertiliserType?: string
  processorID?: string
  createdAt?: string
  updatedAt?: string
}

// Helper to get inventory ID (handles both _id and id)
export function getInventoryId(inventory: Inventory): string {
  return inventory._id ?? inventory.id ?? ''
}

export type FarmerInput = {
  _id?: string
  id?: string
  inventoryID: string
  quantity: string
  eventId: string
  specie?: string
  createdAt?: string
  updatedAt?: string
}

// Helper to get farmer input ID
export function getFarmerInputId(input: FarmerInput): string {
  return input._id ?? input.id ?? ''
}

async function apiRequest<T>(
  method: string,
  path: string,
  body?: unknown,
  token?: string
): Promise<{ data: T; error?: never } | { error: true; msg: string; data?: never }> {
  if (!window.api) {
    console.error('[API] window.api not available')
    return { error: true, msg: 'API not available. Make sure preload script is loaded.' }
  }

  try {
    console.log(`[API] ${method} ${path}`, body ? { body } : '')
    const response = await window.api.request(method, path, body, token)
    console.log('[API] Response:', response)
    
    // Handle 401 Unauthorized
    if (!response.success && response.statusCode === 401) {
      console.error('[API] Unauthorized (401) - logging out')
      handleUnauthorized()
      return { error: true, msg: 'Unauthorized. Please login again.' }
    }

    if (!response.success) {
      const errorMsg =
        (response.data as { msg?: string })?.msg ?? response.error ?? 'Request failed'
      console.error(`[API] Error (${response.statusCode ?? 'unknown'}):`, errorMsg)
      return { error: true, msg: errorMsg }
    }

    return { data: response.data as T }
  } catch (err) {
    console.error('[API] Exception:', err)
    if (err instanceof Error) {
      if (err.message.includes('401') || err.message.includes('Unauthorized')) {
        console.error('[API] Unauthorized exception - logging out')
        handleUnauthorized()
        return { error: true, msg: 'Unauthorized. Please login again.' }
      }
      return { error: true, msg: err.message }
    }
    return { error: true, msg: 'An unexpected error occurred' }
  }
}

export async function login(email: string, password: string): Promise<string> {
  const result = await apiRequest<{ msg?: string; token: string }>('POST', '/auth/login', { email, password })
  if (result.error) {
    throw new Error(result.msg)
  }
  if (!result.data.token) {
    throw new Error('Token not received from server')
  }
  return result.data.token
}

// Inventory APIs
export async function listInventories(token: string): Promise<Inventory[]> {
  const result = await apiRequest<{ msg: string; data: Inventory[] } | Inventory[]>('GET', '/inventory', undefined, token)
  if (result.error) {
    throw new Error(result.msg)
  }
  
  // Handle different response formats
  if (Array.isArray(result.data)) {
    return result.data
  } else if (result.data && typeof result.data === 'object' && 'data' in result.data) {
    const data = (result.data as { data: unknown }).data
    return Array.isArray(data) ? data : []
  }
  
  return []
}

export async function createInventory(
  payload: Omit<Inventory, '_id' | 'Items'>,
  token: string
): Promise<Inventory> {
  const result = await apiRequest<{ msg: string; data: Inventory }>('POST', '/inventory', payload, token)
  if (result.error) {
    throw new Error(result.msg)
  }
  return result.data.data
}

export async function getInventoryById(id: string, token: string): Promise<Inventory> {
  const result = await apiRequest<{ msg: string; data: Inventory } | Inventory>('GET', `/inventory/${id}`, undefined, token)
  if (result.error) {
    throw new Error(result.msg)
  }
  
  // Handle different response formats
  if (result.data && typeof result.data === 'object' && 'data' in result.data) {
    return (result.data as { data: Inventory }).data
  }
  
  return result.data as Inventory
}

export async function updateInventory(
  id: string,
  payload: Partial<Inventory>,
  token: string
): Promise<Inventory> {
  const result = await apiRequest<{ msg: string; data: Inventory }>(
    'PUT',
    `/inventory/${id}`,
    payload,
    token
  )
  if (result.error) {
    throw new Error(result.msg)
  }
  return result.data.data
}

export async function deleteInventory(id: string, token: string): Promise<void> {
  const result = await apiRequest<{ msg: string }>('DELETE', `/inventory/${id}`, undefined, token)
  if (result.error) {
    throw new Error(result.msg)
  }
}

// Farmer Input APIs
export async function listFarmerInputs(inventoryId: string, token: string): Promise<FarmerInput[]> {
  const result = await apiRequest<{ msg: string; data: FarmerInput[] } | FarmerInput[]>(
    'GET',
    `/inventory/${inventoryId}/farmer-inputs`,
    undefined,
    token
  )
  if (result.error) {
    throw new Error(result.msg)
  }
  
  // Handle different response formats
  if (Array.isArray(result.data)) {
    return result.data
  } else if (result.data && typeof result.data === 'object' && 'data' in result.data) {
    const data = (result.data as { data: unknown }).data
    return Array.isArray(data) ? data : []
  }
  
  return []
}

export async function getFarmerInputByEvent(eventId: string, token: string): Promise<FarmerInput> {
  const result = await apiRequest<FarmerInput>(
    'GET',
    `/farmer-input/event/${eventId}`,
    undefined,
    token
  )
  if (result.error) {
    throw new Error(result.msg)
  }
  return result.data
}

export async function addFarmerInput(
  payload: Omit<FarmerInput, '_id'>,
  token: string
): Promise<FarmerInput> {
  const result = await apiRequest<{ msg: string; data: FarmerInput }>(
    'POST',
    '/farmer-input',
    payload,
    token
  )
  if (result.error) {
    throw new Error(result.msg)
  }
  return result.data.data
}

export async function deleteFarmerInput(inputId: string, token: string): Promise<void> {
  const result = await apiRequest<{ msg: string }>('DELETE', `/farmer-input/${inputId}`, undefined, token)
  if (result.error) {
    throw new Error(result.msg)
  }
}

// Legacy function name for compatibility
export async function getInventory(id: string, token: string): Promise<Inventory> {
  return getInventoryById(id, token)
}

