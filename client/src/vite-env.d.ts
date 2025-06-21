/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_DEV_API: string;
  readonly VITE_PROD_API: string;
  // add more if needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
