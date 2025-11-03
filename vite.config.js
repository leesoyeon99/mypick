import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // 상대 경로 사용 (main/docs 방식)
  build: {
    outDir: 'docs', // 빌드 출력을 docs 폴더로
  },
})

