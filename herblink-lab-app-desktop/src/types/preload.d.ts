export {};

declare global {
  interface Window {
    api: {
      login: (
        email: string,
        password: string
      ) => Promise<{ success: boolean; error?: string }>;
      lab: {
        addProcessorInput: (payload: {
          processorInventoryId: string;
          reportpath?: string;
          description?: string;
          isDone?: boolean;
        }) => Promise<{
          data: any | null;
          error: string | null;
          logout?: boolean;
        }>;
        listProcessorInputs: () => Promise<{
          data: any[] | null;
          error: string | null;
          logout?: boolean;
        }>;
        listPendingProcessorInputs: () => Promise<{
          data: any[] | null;
          error: string | null;
          logout?: boolean;
        }>;
        updateProcessorInput: (
          id: string,
          payload: {
            reportpath?: string;
            description?: string;
            isDone?: boolean;
          }
        ) => Promise<{
          data: any | null;
          error: string | null;
          logout?: boolean;
        }>;
      };
    };
  }
}

