import {
  defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'
import {
  resolve
} from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  //配置代理
  server: {
    proxy: {
      '/api': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  resolve: {
    //设置别名
    alias: {
      '@': '/src/',
      'comps': '/src/components'
    }
  },
  plugins: [vue()]
})