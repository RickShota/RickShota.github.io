// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://rickshota.github.io',
  integrations: [sitemap()],
  devToolbar: {
    enabled: false,
  },
  build: {
    format: 'directory',
  },
});
