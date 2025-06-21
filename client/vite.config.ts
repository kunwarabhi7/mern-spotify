import path from "path";
import { fileURLToPath } from "url"; // ✅ Fix for __dirname
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// ✅ Define __dirname manually for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3000,
  },
});
