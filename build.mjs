import esbuild from 'esbuild'
import {EOL} from 'os'

console.time('Build took')

esbuild
  .build({
    entryPoints: ['src/index.ts'], // Your main entry point
    bundle: true, // Bundle all dependencies into one file
    platform: 'node', // Target Node.js
    target: 'es2022', // Specify Node.js version, matches your tsconfig 'target'
    format: 'esm', // Bundled output file (dist/index.js) is treated as a module,
    outfile: 'dist/index.js', // Output file
    sourcemap: true, // Generate source maps for debugging
    minify: true, // Minify the output code for production
    banner: {
      // Add a shebang to make the script executable
      js: `#!/usr/bin/env node${EOL}`,
    },
    // esbuild automatically reads and respects your tsconfig.json 'paths'
  })
  .catch(() => process.exit(1))
  .finally(() => console.timeEnd('Build took'))
