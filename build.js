const esbuild = require('esbuild');
const esbuildSvelte = require('esbuild-svelte');
const sveltePreprocess = require('svelte-preprocess');

esbuild
  .build({
    entryPoints: ['src/index.ts'],
    bundle: true,
    format: 'cjs',
    outdir: './dist',
    plugins: [
      esbuildSvelte({
        compilerOptions: {
          customElement: true,
        },
        preprocess: sveltePreprocess(),
      }),
    ],
  })
  .catch(() => process.exit(1));
