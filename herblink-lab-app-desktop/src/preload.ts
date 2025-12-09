import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('api', {
  login: (email: string, password: string) =>
    ipcRenderer.invoke('auth:login', { email, password }),
  lab: {
    addProcessorInput: (payload: {
      processorInventoryId: string;
      reportpath?: string;
      description?: string;
      isDone?: boolean;
    }) => ipcRenderer.invoke('lab:addProcessorInput', payload),
    listProcessorInputs: () => ipcRenderer.invoke('lab:listProcessorInputs'),
    listPendingProcessorInputs: () =>
      ipcRenderer.invoke('lab:listPendingProcessorInputs'),
    updateProcessorInput: (
      id: string,
      payload: {
        reportpath?: string;
        description?: string;
        isDone?: boolean;
      }
    ) => ipcRenderer.invoke('lab:updateProcessorInput', id, payload),
  },
});
