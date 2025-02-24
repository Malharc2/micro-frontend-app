import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation"; // ✅ Import Module Federation

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "emailApp", // ✅ Unique name for the micro frontend
      filename: "remoteEntry.js", // ✅ Correct remote entry file
      exposes: {
        "./EmailApp": "./src/EmailApp.jsx", // ✅ Expose EmailApp correctly
      },
      shared: ["react", "react-dom", "react-router-dom"], // ✅ Shared dependencies
    }),
  ],
  server: {
    port: 3002, // ✅ Ensure this port is used
  },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
