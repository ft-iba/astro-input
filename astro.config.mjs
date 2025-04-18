// @ts-check
import { defineConfig } from 'astro/config';
import { execSync } from 'child_process';
import { site } from './src/constants';

const commitHash = execSync('git rev-parse --short HEAD').toString().trim();

// https://astro.build/config
export default defineConfig({
  site: site.domain,
  base: site.base,
  trailingSlash: 'always',
  vite: {
    define: {
      'import.meta.env.COMMIT_HASH': JSON.stringify(commitHash),
    },
  },
});