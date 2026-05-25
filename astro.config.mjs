// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  // Apex custom domain on GitHub Pages — base stays at root.
  site: 'https://workspace.sh',
  base: '/',
  integrations: [react(), mdx()],
});
