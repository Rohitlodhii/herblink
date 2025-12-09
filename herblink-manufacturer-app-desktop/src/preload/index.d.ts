import { ElectronAPI } from '@electron-toolkit/preload'

type ApiResponse<T = any> = {
  success: boolean
  data?: T
  msg?: string
  error?: string
}

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      login: (email: string, password: string) => Promise<{
        success: boolean
        token?: string
        msg?: string
        error?: string
      }>
      saveToken: (token: string) => Promise<{ success: boolean; error?: string }>
      getToken: () => Promise<{ success: boolean; token?: string; error?: string }>
      products: {
        create: (productData: {
          productName: string
          productDescription?: string
          productImage?: string
          productionDate?: string
          productionBatch?: string
        }) => Promise<ApiResponse>
        list: () => Promise<ApiResponse>
        getById: (id: string) => Promise<ApiResponse>
        update: (
          id: string,
          productData: {
            productName?: string
            productDescription?: string
            productImage?: string
            productionDate?: string
            productionBatch?: string
          }
        ) => Promise<ApiResponse>
        delete: (id: string) => Promise<ApiResponse>
      }
      productInventory: {
        create: (inventoryData: {
          productId: string
          HerbName: string
          herbInventoryId: string
        }) => Promise<ApiResponse>
        listByProduct: (productId: string) => Promise<ApiResponse>
        getById: (id: string) => Promise<ApiResponse>
        update: (
          id: string,
          inventoryData: {
            HerbName?: string
            herbInventoryId?: string
          }
        ) => Promise<ApiResponse>
        delete: (id: string) => Promise<ApiResponse>
      }
      herbInventory: {
        create: (inventoryData: {
          processorInventoryId: string
          quantityReceived: string
        }) => Promise<ApiResponse>
        list: () => Promise<ApiResponse>
        getById: (id: string) => Promise<ApiResponse>
        update: (
          id: string,
          inventoryData: {
            quantityReceived?: string
            processorInventoryId?: string
          }
        ) => Promise<ApiResponse>
      }
    }
  }
}
