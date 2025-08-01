import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path';
import { visualizer } from 'rollup-plugin-visualizer';
import vitePluginImp from 'vite-plugin-imp';


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), visualizer(), vitePluginImp({
    libList: [
        {
          libName: 'antd',
          style: (name) => `antd/es/${name}/style`, // loads CSS on demand
        },
      ],
  })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})

