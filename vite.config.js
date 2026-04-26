import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import prerender from "vite-plugin-prerender";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    prerender({ staticDir: "dist", routes: ["/"] }),
  ],
  base: "/Portfolio-v2.0",
});
