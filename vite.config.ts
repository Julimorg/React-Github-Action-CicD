import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   base: 'React-Github-Action-CicD', // Thay <your-repo-name> bằng tên repository nếu deploy lên GitHub Pages
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
  server: {
    port: 3000,
  },
})
