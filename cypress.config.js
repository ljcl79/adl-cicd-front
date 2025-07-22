import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "k7au3e",
  e2e: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
    setupNodeEvents(on, config) {

      // implement node event listeners here
    },
    baseUrl: 'http://localhost:4173'
  },
});
