// @ts-check
import { defineConfig } from 'astro/config';
import { site } from './src/constants';

// https://astro.build/config
export default defineConfig({
  site: site.domain,
  base: site.base,
  trailingSlash: 'always',
});