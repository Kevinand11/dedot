import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Components from 'unplugin-vue-components/vite'
import * as path from 'path'

export default defineConfig({
	plugins: [
		vue(),
		Pages({
			dirs: 'src/pages',
			routeStyle: 'nuxt'
		}),
		Components({
			dirs: ['src/components'],
			dts: true,
			types: [{ from: 'vue-router', names: ['RouterLink', 'RouterView'] }]
		})
	],
	resolve: {
		alias: {
			'@': path.join(__dirname, 'src')
		}
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@import '@/assets/styles/global.scss';
`
			}
		}
	},
	server: {
		port: 8080
	}
})
