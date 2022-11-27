import { defineConfig, loadEnv } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [svelte()],
    define: {
      __APP_ENV__: env
    },
    base: './',
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
          nested: resolve(__dirname, 'validate.html')
        }
      }
    }
  }
})
