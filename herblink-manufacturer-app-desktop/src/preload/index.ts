import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

// Custom APIs for renderer
const api = {
  login: async (email: string, password: string) => {
    try {
      const response = await fetch('http://localhost:8000/api/manufacturer/auth/login', {
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
        // Return error with message from backend
        return {
          success: false,
          error: data.msg || `HTTP ${response.status}: ${response.statusText}`
        }
      }

      // Return success with token
      return {
        success: true,
        token: data.token,
        msg: data.msg
      }
    } catch (error) {
      // Handle network errors or other exceptions
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Network error occurred'
      }
    }
  },

  // IPC method to save token to file system
  saveToken: (token: string) => {
    return ipcRenderer.invoke('save-token', token)
  },

  // IPC method to get token from file system
  getToken: () => {
    return ipcRenderer.invoke('get-token')
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
