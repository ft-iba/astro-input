const base: string = 'astro-input';

export const commit_hash = import.meta.env.COMMIT_HASH;

const domain: string = 'https://ft-iba.github.io';

export const site = {
  // root: `${import.meta.env.PUBLIC_URL}/${base}/`,
  root: `${domain}/${base}/`,
  domain: domain,
  base: base,
}