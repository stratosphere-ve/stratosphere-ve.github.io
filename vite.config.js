import { defineConfig } from "vite";

export default defineConfig({
  root: "src",
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: "src/index/index.html",
        about: "src/about/index.html",
        contact: "src/contact/index.html",
      },
    },
  },
});
