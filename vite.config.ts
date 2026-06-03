import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { qrcode } from 'vite-plugin-qrcode'
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'

// https://vitejs.dev/config/

const isProduct = process.env.NODE_ENV === 'product'

export default defineConfig({
  plugins: [vue(), qrcode()],
  // base: "https://sirenai.s3.ap-northeast-1.amazonaws.com/",
  // base: isProduct ? './' : '/',
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        entryFileNames: "assets/[name].js", // 主入口文件名
        chunkFileNames: "assets/[name].js", // 动态导入的 chunk 文件名
        assetFileNames: "assets/[name].[ext]", // 静态资源文件名
      },
    },
  },
  resolve: {
    alias: {
      '@': '/src/',
      stream: 'stream-browserify',
      crypto: 'crypto-browserify',
    },
    extensions: ['.vue', '.ts', '.js', 'index.vue'],
  },
  css: {
    preprocessorOptions: {
      less: {},
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: 'globalThis',
      },
      plugins: [
        NodeGlobalsPolyfillPlugin({
          process: true,
          buffer: true,
        }),
      ],
    },
  },
  server: {
    port: 3000,
    cors: true,
    // https: true,
    proxy: {
      '/public': {
        // '/api'是代理标识，一般是每个接口前的相同部分
        target: 'https://music.balawallet.com', // 请求地址，一般是服务器地址
        changeOrigin: true, // 是否进行跨域
        rewrite(path) {
          // pathRewrite的作用是把请求接口中的 '/api'替换掉，一般是替换为空""
          return path.replace(/^\/public/, '')
        },
      },
      '/game': {
        // '/api'是代理标识，一般是每个接口前的相同部分
        target: 'https://musictest.muverse.info/', // 请求地址，一般是服务器地址
        changeOrigin: true, // 是否进行跨域
      },
      '/siren': {
        // '/api'是代理标识，一般是每个接口前的相同部分
        target: 'https://adminhost.sirenai.me/index.php/api/index/', // 请求地址，一般是服务器地址
        changeOrigin: true, // 是否进行跨域
      },
    },
  },
})
