import { app, shell, BrowserWindow, ipcMain } from 'electron'
import { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import icon from '../../resources/icon.png?asset'

function createWindow(): void {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 900,
    height: 670,
    show: false,
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false,
      webSecurity: true
    }
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  // Set app user model id for windows
  electronApp.setAppUserModelId('com.electron')

  // Default open or close DevTools by F12 in development
  // and ignore CommandOrControl + R in production.
  // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
    // Open DevTools in development for debugging
    if (is.dev) {
      window.webContents.openDevTools()
    }
  })

  // IPC test
  ipcMain.on('ping', () => console.log('pong'))

  // API request handler
  ipcMain.handle('api-request', async (_, { method, path, body, token }) => {
    const API_BASE = process.env.VITE_API_BASE ?? 'http://localhost:8000/api/processor'
    const url = `${API_BASE}${path}`
    
    // Debug logging
    console.log(`[API Request] ${method} ${url}`)
    if (body) {
      console.log('[API Request Body]', JSON.stringify(body, null, 2))
    }
    
    try {
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          ...(token ? { Authorization: `Bearer ${token}` } : {})
        },
        ...(body ? { body: JSON.stringify(body) } : {})
      })
      
      let data
      try {
        data = await response.json()
      } catch {
        data = undefined
      }
      
      // Debug logging
      console.log(`[API Response] ${response.status} ${response.statusText}`)
      if (data) {
        console.log('[API Response Data]', JSON.stringify(data, null, 2))
      }
      
      if (!response.ok) {
        const message = (data as { msg?: string })?.msg ?? `Request failed with status ${response.status}`
        console.error(`[API Error] ${response.status}: ${message}`)
        return { success: false, statusCode: response.status, data, error: message }
      }
      
      return { success: true, statusCode: response.status, data }
    } catch (err) {
      console.error('[API Exception]', err)
      if (err instanceof TypeError && err.message.includes('fetch')) {
        const errorMsg = 'Unable to connect to server. Please ensure the backend is running on http://localhost:8000'
        console.error('[API Connection Error]', errorMsg)
        return {
          success: false,
          statusCode: 0,
          error: errorMsg,
          data: undefined
        }
      }
      const errorMsg = err instanceof Error ? err.message : 'An unexpected error occurred'
      console.error('[API Unexpected Error]', errorMsg)
      return {
        success: false,
        statusCode: 0,
        error: errorMsg,
        data: undefined
      }
    }
  })

  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
