import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Components from 'unplugin-vue-components/vite'

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
	server: {
		port: 8080
	}
})
