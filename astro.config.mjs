// @ts-check
import { defineConfig } from 'astro/config';

import relativeLinks from 'astro-relative-links';

// https://astro.build/config
export default defineConfig({
  site: 'https://ft-iba.github.io',
  base: 'astro-input',
  integrations: [relativeLinks()]
});