import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { visualizer } from 'rollup-plugin-visualizer'
// import viteCompression from 'vite-plugin-compression'
// import { resolve } from 'path'
import { resolve } from 'path'
import { createHtmlPlugin } from 'vite-plugin-html'
import topLevelAwait from 'vite-plugin-top-level-await'

// https://vitejs.dev/config/
export default defineConfig((config) => {
  console.log(config)
  const baseUrl = config.mode == 'development' ? '/' : '/tools/'

  const viteConfig = {
    base: baseUrl,

    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },

    server: {
      open: true,
    },

    plugins: [
      vue(),
      // gzip
      // viteCompression(),
      // createHtmlPlugin({
      //   pages,
      // }),

      createHtmlPlugin({
        inject: {
          data: {
            BASE_URL: baseUrl,
          },
        },
      }),

      topLevelAwait({
        // The export name of top-level await promise for each chunk module
        promiseExportName: '__tla',
        // The function to generate import names of top-level await promise in each chunk module
        promiseImportName: (i) => `__tla_${i}`,
      }),
    ],

    build: {
      // 禁用 gzip 压缩大小报告
      reportCompressedSize: true,
      chunkSizeWarningLimit: 1000,

      rollupOptions: {
        input: {
          'index': resolve(__dirname, 'index.html'),
          'naming-style': resolve(__dirname, 'pages/naming-style/index.html'),
          'letter-avatar': resolve(__dirname, 'pages/letter-avatar/index.html'),
          'code-format': resolve(__dirname, 'pages/code-format/index.html'),
          'password': resolve(__dirname, 'pages/password/index.html'),
          'uuid': resolve(__dirname, 'pages/uuid/index.html'),
          'color-convert': resolve(__dirname, 'pages/color-convert/index.html'),
        },

        output: {
          chunkFileNames: 'js/[name].[hash].js',
          entryFileNames: 'js/[name].[hash].js',
          assetFileNames: '[ext]/[name].[hash].[ext]',
          manualChunks: {
            'vendor-vue': ['vue', 'vue-router', 'pinia'],
            'element-icon': ['@element-plus/icons-vue'],
            'element-plus': ['element-plus'],
            // 'highlight-lib': ['highlight.js'],
            // 'codemirror-lib': [
            //   'codemirror',
            //   '@codemirror/lang-json',
            //   '@codemirror/theme-one-dark',
            //   '@ssddanbrown/codemirror-lang-twig',
            //   'vue-codemirror',
            // ],
            'vendor-lib': [
              // 'axios',
              'file-saver',
              // 'js-cookie',
              'dayjs',
              // 'cron-parser',
              // 'cron-validator',
              // 'copy-to-clipboard',
              'nprogress',
              // 'mockjs',
              // 'lodash',
            ],
          },
        },
      },
    },
  }

  // 打包产物体积分析
  if (config.mode == 'visualizer') {
    viteConfig.plugins.push(
      visualizer({
        open: true, //注意这里要设置为true，否则无效
        gzipSize: true,
        brotliSize: true,
      })
    )
  }

  return viteConfig
})
