import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// @ts-expect-error We aren't including node in the tsconfig
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [{
      find: '~',
      replacement: path.resolve(
        // @ts-expect-error We aren't including node in the tsconfig
        __dirname,
        'src',
      )
    }],
  },
  plugins: [react()],
})
