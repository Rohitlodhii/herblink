import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      login: (email: string, password: string, role: 'lab' | 'manufacturer' | 'processor') => Promise<{
        success: boolean
        token?: string
        error?: string
        msg?: string
      }>
      saveToken: (token: string, role: string) => Promise<{ success: boolean; error?: string }>
      getToken: () => Promise<{ success: boolean; token?: string; role?: string; error?: string }>
      lab: {
        processorInputs: {
          list: () => Promise<any>
          create: (data: any) => Promise<any>
          getPending: () => Promise<any>
          update: (id: string, data: any) => Promise<any>
        }
        workers: {
          list: () => Promise<any>
          create: (data: any) => Promise<any>
        }
        info: {
          get: () => Promise<any>
          update: (data: any) => Promise<any>
        }
      }
      manufacturer: {
        products: {
          create: (data: any) => Promise<any>
          list: () => Promise<any>
          getById: (id: string) => Promise<any>
          update: (id: string, data: any) => Promise<any>
          delete: (id: string) => Promise<any>
        }
        productInventory: {
          create: (data: any) => Promise<any>
          listByProduct: (productId: string) => Promise<any>
          getById: (id: string) => Promise<any>
          update: (id: string, data: any) => Promise<any>
          delete: (id: string) => Promise<any>
        }
        herbInventory: {
          create: (data: any) => Promise<any>
          list: () => Promise<any>
          getById: (id: string) => Promise<any>
          update: (id: string, data: any) => Promise<any>
        }
      }
      processor: {
        inventory: {
          list: () => Promise<any>
          getById: (id: string) => Promise<any>
          update: (id: string, data: any) => Promise<any>
          create: (data: any) => Promise<any>
        }
        farmerInput: {
          list: () => Promise<any>
          getByEventId: (eventId: string) => Promise<any>
        }
        plant: {
          get: () => Promise<any>
          update: (data: any) => Promise<any>
        }
      }
    }
  }
}

