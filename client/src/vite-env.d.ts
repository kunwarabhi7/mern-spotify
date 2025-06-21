/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly MODE: string;
  readonly VITE_DEV_API: string;
  readonly VITE_PROD_API: string;
  readonly VITE_CLERK_PUBLISHABLE_KEY: string;
  // add more VITE_... keys as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
