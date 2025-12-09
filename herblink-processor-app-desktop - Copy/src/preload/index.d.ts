import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      request: (
        method: string,
        path: string,
        body?: unknown,
        token?: string
      ) => Promise<{ success: boolean; statusCode?: number; data?: unknown; error?: string }>
    }
  }
}
