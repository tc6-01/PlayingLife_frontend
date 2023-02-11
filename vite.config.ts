import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// unplugin-vue-components会解析模板并自动注册对应的组件。
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      vue(),
      Components({
        resolvers: [VantResolver()],
      })
  ],
  server: {
    port: 3000
  }
  });

