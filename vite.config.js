import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
    // REPLACE 'your-repo-name' with the actual name of your GitHub repository
    //base: './MyFirstPersonalSite',
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
});