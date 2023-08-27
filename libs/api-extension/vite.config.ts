import { crx } from '@crxjs/vite-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
// @ts-expect-error
import manifest from './manifest.json';

// https://vitejs.dev/config/
export default defineConfig({
  // @ts-ignore
  plugins: [react(), crx({ manifest })],
});
