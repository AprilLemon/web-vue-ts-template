import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

// svg改用svg.ts方式使用
// https://github.com/vbenjs/vite-plugin-svg-icons/blob/main/README.zh_CN.md

// 直接使用图片，无需引入
// https://www.npmjs.com/package/vite-plugin-vue-images
// import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// import ViteImages from 'vite-plugin-vue-images'
import viteCompression from 'vite-plugin-compression'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { visualizer } from "rollup-plugin-visualizer";

import postcssImport from 'postcss-import'
import autoprefixer from 'autoprefixer'
import tailwindcss from 'tailwindcss'

// https://vitejs.dev/config/
export default defineConfig(({ mode = '', command = '', ssrBuild = false }) => {
  // 获取当前配置文件
  const env = loadEnv(mode, __dirname)
  console.log(env)
  const plugins = [
    vue({
      reactivityTransform: true
    }),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia'],
      resolvers: [ElementPlusResolver()],
      dts: 'src/types/auto-import.d.ts'
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    })
  ]
  console.log(command)
  if (command === 'build') {
    plugins.push(viteCompression({ deleteOriginFile: false }))
    plugins.push(visualizer({
      open: true,
      filename: path.resolve(__dirname, './dist/status.html')
    }))
  }
  return {
    plugins,
    resolve: {
      extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
      alias: {
        '@': path.resolve(__dirname, './src/'),
      },
    },
    css: {
      postcss: {
        plugins: [
          postcssImport,
          autoprefixer,
          tailwindcss
        ]
      }
    },
    server: {
      proxy: {
        '/api': {
          secure: false,
          target: 'https://api.foxcube.cn',
          changeOrigin: true,
          rewrite: path => path.replace(/\/api/, ''),
        },
      },
    },
  }
})
