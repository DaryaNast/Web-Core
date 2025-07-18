import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
    base: '/Web-Core/',
    build: {
        outDir: 'docs',
        emptyOutDir: true,
        assetsInlineLimit: 4096,
        rollupOptions: {
            output: {
                assetFileNames: 'assets/[name]-[hash][extname]',
                chunkFileNames: 'assets/[name]-[hash].js',
                entryFileNames: 'assets/[name]-[hash].js'
            }
        }
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
          @use "@/scss/global/variables" as *;
          @use "@/scss/global/mixins" as *;
        `,
                charset: false
            }
        }
    }
})