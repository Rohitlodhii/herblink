import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

// Helper function to get auth token
const getAuthToken = (): string | null => {
  try {
    return localStorage.getItem('authToken')
  } catch {
    return null
  }
}

// Helper function to make authenticated API calls
const apiCall = async (
  endpoint: string,
  options: RequestInit = {}
): Promise<{ success: boolean; data?: any; error?: string; msg?: string }> => {
  try {
    const token = getAuthToken()
    if (!token) {
      return { success: false, error: 'No authentication token found' }
    }

    const response = await fetch(`http://localhost:8000${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        ...options.headers
      }
    })

    const data = await response.json()

    if (!response.ok) {
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

// Custom APIs for renderer
const api = {
  // Login APIs for all roles
  login: async (email: string, password: string, role: 'lab' | 'manufacturer' | 'processor') => {
    try {
      const roleMap = {
        lab: '/api/lab/auth/login',
        manufacturer: '/api/manufacturer/auth/login',
        processor: '/api/processor/auth/login'
      }

      const response = await fetch(`http://localhost:8000${roleMap[role]}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      })

      const data = await response.json()

      if (!response.ok) {
        return {
          success: false,
          error: data.msg || `HTTP ${response.status}: ${response.statusText}`
        }
      }

      return {
        success: true,
        token: data.token,
        msg: data.msg
      }
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Network error occurred'
      }
    }
  },

  // IPC method to save token to file system
  saveToken: (token: string, role: string) => {
    return ipcRenderer.invoke('save-token', token, role)
  },

  // IPC method to get token from file system
  getToken: () => {
    return ipcRenderer.invoke('get-token')
  },

  // Lab APIs
  lab: {
    processorInputs: {
      list: () => apiCall('/api/lab/processor-input', { method: 'GET' }),
      create: (data: {
        processorInventoryId: string
        reportpath?: string
        description?: string
        isDone?: boolean
      }) => apiCall('/api/lab/processor-input', { method: 'POST', body: JSON.stringify(data) }),
      getPending: () => apiCall('/api/lab/processor-input/pending-report', { method: 'GET' }),
      update: (id: string, data: {
        reportpath?: string
        description?: string
        isDone?: boolean
      }) => apiCall(`/api/lab/processor-input/${id}`, { method: 'PUT', body: JSON.stringify(data) })
    },
    workers: {
      list: () => apiCall('/api/lab/worker', { method: 'GET' }),
      create: (data: {
        name: string
        workerId: string
        role: string
        desc?: string
      }) => apiCall('/api/lab/worker', { method: 'POST', body: JSON.stringify(data) })
    },
    info: {
      get: () => apiCall('/api/lab/license/info', { method: 'GET' }),
      update: (data: any) => apiCall('/api/lab/license/info', { method: 'POST', body: JSON.stringify(data) })
    }
  },

  // Manufacturer APIs
  manufacturer: {
    products: {
      create: (productData: {
        productName: string
        productDescription?: string
        productImage?: string
        productionDate?: string
        productionBatch?: string
      }) => apiCall('/api/manufacturer/product', { method: 'POST', body: JSON.stringify(productData) }),
      list: () => apiCall('/api/manufacturer/product', { method: 'GET' }),
      getById: (id: string) => apiCall(`/api/manufacturer/product/${id}`, { method: 'GET' }),
      update: (id: string, productData: any) => apiCall(`/api/manufacturer/product/${id}`, { method: 'PUT', body: JSON.stringify(productData) }),
      delete: (id: string) => apiCall(`/api/manufacturer/product/${id}`, { method: 'DELETE' })
    },
    productInventory: {
      create: (inventoryData: {
        productId: string
        HerbName: string
        herbInventoryId: string
      }) => apiCall('/api/manufacturer/product-inventory', { method: 'POST', body: JSON.stringify(inventoryData) }),
      listByProduct: (productId: string) => apiCall(`/api/manufacturer/product-inventory/product/${productId}`, { method: 'GET' }),
      getById: (id: string) => apiCall(`/api/manufacturer/product-inventory/${id}`, { method: 'GET' }),
      update: (id: string, inventoryData: any) => apiCall(`/api/manufacturer/product-inventory/${id}`, { method: 'PUT', body: JSON.stringify(inventoryData) }),
      delete: (id: string) => apiCall(`/api/manufacturer/product-inventory/${id}`, { method: 'DELETE' })
    },
    herbInventory: {
      create: (inventoryData: {
        processorInventoryId: string
        quantityReceived: string
      }) => apiCall('/api/manufacturer/herb-inventory', { method: 'POST', body: JSON.stringify(inventoryData) }),
      list: () => apiCall('/api/manufacturer/herb-inventory', { method: 'GET' }),
      getById: (id: string) => apiCall(`/api/manufacturer/herb-inventory/${id}`, { method: 'GET' }),
      update: (id: string, inventoryData: any) => apiCall(`/api/manufacturer/herb-inventory/${id}`, { method: 'PUT', body: JSON.stringify(inventoryData) })
    }
  },

  // Processor APIs
  processor: {
    inventory: {
      list: () => apiCall('/api/processor/inventory', { method: 'GET' }),
      getById: (id: string) => apiCall(`/api/processor/inventory/${id}`, { method: 'GET' }),
      update: (id: string, data: any) => apiCall(`/api/processor/inventory/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
      create: (data: any) => apiCall('/api/processor/inventory', { method: 'POST', body: JSON.stringify(data) })
    },
    farmerInput: {
      list: () => apiCall('/api/processor/farmer-input', { method: 'GET' }),
      getByEventId: (eventId: string) => apiCall(`/api/processor/farmer-input/event/${eventId}`, { method: 'GET' })
    },
    plant: {
      get: () => apiCall('/api/processor/plant', { method: 'GET' }),
      update: (data: any) => apiCall('/api/processor/plant', { method: 'POST', body: JSON.stringify(data) })
    }
  }
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}

