import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react()],
    server: {
      proxy: {
        '/api': {
          target: 'http://localhost:3001',
          changeOrigin: true,
        },
        '/auth': {
          target: (env.NEON_AUTH_BASE_URL || 'http://localhost:3000/auth').replace('/auth', ''), // Target should be the host before /auth so /auth proxies correctly
          changeOrigin: true,
          configure: (proxy, options) => {
            proxy.on('proxyReq', (proxyReq, req, res) => {
              if (!req.headers.origin) {
                proxyReq.setHeader('Origin', `http://${req.headers.host}`);
              }
            });
          }
        }
      }
    }
  }
})
