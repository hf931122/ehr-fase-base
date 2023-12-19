import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import dts from "vite-plugin-dts"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    dts()
  ],
  resolve: {
    alias: {
      '/images': 'packages/images',
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'packages': fileURLToPath(new URL('./packages', import.meta.url)),
      'lib': fileURLToPath(new URL('./lib', import.meta.url))
    },
    extensions: [".vue",'.js', '.json', '.ts', '.tsx'],//使用别名省略的后缀名
  },
  build: {
    outDir: 'lib',
    rollupOptions: {
      // 请确保外部化那些你的库中不需要的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    },
    lib: {
      entry: 'packages/index.ts',
      name: 'ehr-face-base',
      fileName: (format) => `ehr-face-base.${format}.js`,
    },
  }
})
