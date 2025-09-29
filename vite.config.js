import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/ferpanz.github.io/',
  plugins: [react()],
})