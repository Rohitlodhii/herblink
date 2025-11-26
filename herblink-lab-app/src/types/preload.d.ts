export {};

declare global {
  interface Window {
    api: {
      login: (
        email: string,
        password: string
      ) => Promise<{ success: boolean; error?: string }>;
    };
  }
}

