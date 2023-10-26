import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import Pages from 'vite-plugin-pages';
import pkg from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Pages({
      resolver: 'react',
    }),
  ],
  base: process.env.GITHUB_ACTIONS ? `/${pkg.name}/` : '/',
})