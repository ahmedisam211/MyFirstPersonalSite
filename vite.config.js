import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
<<<<<<< HEAD
    // REPLACE 'your-repo-name' with the actual name of your GitHub repository
=======
>>>>>>> 1396ebe3090192c69ddace736ce891dff0057216
    base: './MyFirstPersonalSite',
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
});
