import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  server: {
    port: 3001
  },
  integrations: [
    vue({ appEntrypoint: '/src/pages/_app.js' }),
    tailwind(
      {
        config: {
          applyBaseStyles: false
        }
      }
    )
  ]
});