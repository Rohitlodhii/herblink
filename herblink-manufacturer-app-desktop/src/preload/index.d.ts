import { ElectronAPI } from '@electron-toolkit/preload'

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
    }
  }
}
