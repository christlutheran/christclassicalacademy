import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://wwww.christclassicalmanhattan.org',
  output: 'static',
  server: {
    host: true
  }
});