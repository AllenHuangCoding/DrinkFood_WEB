import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc'

export default defineConfig(({ command, mode }) => {
    const env = loadEnv(mode, process.cwd(), '');
    return {
      plugins: [react()],
        define: {
            'process.env.REACT_APP_API_BASEURL': JSON.stringify(env.REACT_APP_API_BASEURL),
        },
    };
});