import path from 'path';
import { loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

const CWD = process.cwd();

export default (params) => {
  const { mode } = params;
  const { VITE_BASE_URL } = loadEnv(mode, CWD);

  return {
    base: VITE_BASE_URL,
    resolve: {
      alias: {
        assets: path.resolve(__dirname, './src/assets'),
        components: path.resolve(__dirname, './src/components'),
        configs: path.resolve(__dirname, './src/configs'),
        layouts: path.resolve(__dirname, './src/layouts'),
        modules: path.resolve(__dirname, './src/modules'),
        pages: path.resolve(__dirname, './src/pages'),
        styles: path.resolve(__dirname, './src/styles'),
        utils: path.resolve(__dirname, './src/utils'),
        services: path.resolve(__dirname, './src/services'),
        router: path.resolve(__dirname, './src/router'),
        hooks: path.resolve(__dirname, './src/hooks'),
        types: path.resolve(__dirname, './src/types'),
      },
    },

    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {
            // 如需自定义组件其他 token, 在此处配置
          },
        },
      },
    },

    plugins: [
      react(),
    ],

    build: {
      cssCodeSplit: false,
    },

    server: {
      host: '0.0.0.0',
      port: 3003,
      proxy: {
        '/api': {
          target: 'https://service-exndqyuk-1257786608.gz.apigw.tencentcs.com',
          changeOrigin: true,
        },
      },
    },
  };
};
