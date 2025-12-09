// API utility functions for authenticated requests

const API_BASE_URL = 'http://localhost:8000'

const getAuthToken = (): string | null => {
  return localStorage.getItem('authToken')
}

const apiCall = async (
  endpoint: string,
  options: RequestInit = {}
): Promise<{ success: boolean; data?: any; error?: string; msg?: string }> => {
  try {
    const token = getAuthToken()
    if (!token) {
      return { success: false, error: 'No authentication token found. Please login again.' }
    }

    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        ...options.headers
      }
    })

    const data = await response.json()

    if (!response.ok) {
      // Handle 401 Unauthorized - token expired
      if (response.status === 401 || response.status === 403) {
        localStorage.removeItem('authToken')
        return {
          success: false,
          error: 'Session expired. Please login again.'
        }
      }
      return {
        success: false,
        error: data.msg || `HTTP ${response.status}: ${response.statusText}`
      }
    }

    return {
      success: true,
      data: data.data,
      msg: data.msg
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Network error occurred'
    }
  }
}

export const productsApi = {
  create: (productData: {
    productName: string
    productDescription?: string
    productImage?: string
    productionDate?: string
    productionBatch?: string
  }) => apiCall('/api/manufacturer/product', { method: 'POST', body: JSON.stringify(productData) }),

  list: () => apiCall('/api/manufacturer/product', { method: 'GET' }),

  getById: (id: string) => apiCall(`/api/manufacturer/product/${id}`, { method: 'GET' }),

  update: (
    id: string,
    productData: {
      productName?: string
      productDescription?: string
      productImage?: string
      productionDate?: string
      productionBatch?: string
    }
  ) => apiCall(`/api/manufacturer/product/${id}`, { method: 'PUT', body: JSON.stringify(productData) }),

  delete: (id: string) => apiCall(`/api/manufacturer/product/${id}`, { method: 'DELETE' })
}

export const productInventoryApi = {
  create: (inventoryData: {
    productId: string
    HerbName: string
    herbInventoryId: string
  }) =>
    apiCall('/api/manufacturer/product-inventory', {
      method: 'POST',
      body: JSON.stringify(inventoryData)
    }),

  listByProduct: (productId: string) =>
    apiCall(`/api/manufacturer/product-inventory/product/${productId}`, { method: 'GET' }),

  getById: (id: string) =>
    apiCall(`/api/manufacturer/product-inventory/${id}`, { method: 'GET' }),

  update: (
    id: string,
    inventoryData: {
      HerbName?: string
      herbInventoryId?: string
    }
  ) =>
    apiCall(`/api/manufacturer/product-inventory/${id}`, {
      method: 'PUT',
      body: JSON.stringify(inventoryData)
    }),

  delete: (id: string) =>
    apiCall(`/api/manufacturer/product-inventory/${id}`, { method: 'DELETE' })
}

export const herbInventoryApi = {
  create: (inventoryData: {
    processorInventoryId: string
    quantityReceived: string
  }) =>
    apiCall('/api/manufacturer/herb-inventory', {
      method: 'POST',
      body: JSON.stringify(inventoryData)
    }),

  list: () => apiCall('/api/manufacturer/herb-inventory', { method: 'GET' }),

  getById: (id: string) =>
    apiCall(`/api/manufacturer/herb-inventory/${id}`, { method: 'GET' }),

  update: (
    id: string,
    inventoryData: {
      quantityReceived?: string
      processorInventoryId?: string
    }
  ) =>
    apiCall(`/api/manufacturer/herb-inventory/${id}`, {
      method: 'PUT',
      body: JSON.stringify(inventoryData)
    })
}

