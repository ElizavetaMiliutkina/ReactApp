import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Загружаем переменные окружения из .env файлов в зависимости от mode
  const env = loadEnv(mode, process.cwd(), '');

  // Пример использования переменных в конфиге (опционально)
  const isDev = env.IS_DEV === 'true'; // Приводим строку к булеву значению
  const apiUrl = env.API_URL;
  const i18nDebug = env.VITE_I18N_DEBUG === 'true';

  // Логи для отладки (можно убрать)
  console.log('Mode:', mode);
  console.log('IS_DEV:', isDev);
  console.log('API_URL:', apiUrl);
  console.log('VITE_I18N_DEBUG:', i18nDebug);

  return {
    plugins: [
      svgr({
        svgrOptions: { exportType: 'named', ref: true, svgo: false, titleProp: true },
        include: '**/*.svg',
      }),
      react(),
    ],
    resolve: {
      alias: [
        { find: '@', replacement: path.resolve(__dirname, 'src') },
      ],
    },
    // Опционально: добавляем define для передачи переменных в код
    define: {
      'process.env.IS_DEV': JSON.stringify(isDev),
      'process.env.API_URL': JSON.stringify(apiUrl),
      'process.env.IS_STORYBOOK': JSON.stringify('false'),
    },
  };
});
