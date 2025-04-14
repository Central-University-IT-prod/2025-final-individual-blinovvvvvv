import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
	plugins: [
		react(),
		tailwindcss(),
		VitePWA({
			registerType: 'autoUpdate',
			workbox: {
				globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
			},
			includeAssets: ['favicon.svg', 'apple-touch-icon.png'],
			manifest: {
				name: 'СигмаФитнес',
				short_name: 'СигмаФитнес',
				description: 'Приложение для тренировок',
				theme_color: '#000',
				background_color: '#000',
				start_url: '/',
				scope: '/',
				orientation: 'portrait',
				icons: [
					{
						src: 'web-app-manifest-192x192.png',
						sizes: '192x192',
						type: 'image/png',
					},
					{
						src: 'web-app-manifest-512x512.png',
						sizes: '512x512',
						type: 'image/png',
					},
					{
						src: 'favicon.svg',
						sizes: '196x196',
						type: 'image/png',
						purpose: 'maskable',
					},
				],
			},
		}),
	],
	publicDir: 'assets',
	build: {
		outDir: 'public',
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
})
