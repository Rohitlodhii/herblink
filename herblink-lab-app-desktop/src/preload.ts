import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('api', {
  login: (email: string, password: string) =>
    ipcRenderer.invoke('auth:login', { email, password }),
});
