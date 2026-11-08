import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// `base` must match the GitHub Pages repo name for correct asset paths.
// For a project page at https://<user>.github.io/portfolio/ use '/portfolio/'.
// For a user page at https://<user>.github.io/ use '/'.
export default defineConfig({
    plugins: [react()],
    base: '/portfolio/',
})
