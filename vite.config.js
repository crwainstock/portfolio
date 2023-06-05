import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // The following stuff was recommended as a solution for getting tailwind to render appropriately in the deployed version. Didn't work here.
  // publicDir: `public`,
  // build: {
  //   outDir: `../dist`,
  // },
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
