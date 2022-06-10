import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/index.scss'
import { createRouter, createWebHistory } from 'vue-router'
// @ts-ignore
import routes from '~pages'

const router = createRouter({
	history: createWebHistory(), routes,
	scrollBehavior: async (to) => {
		if (to.hash) return { el: to.hash }
	}
})

createApp(App)
	.use(router)
	.mount('#app')
