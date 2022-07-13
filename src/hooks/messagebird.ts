import { onMounted, onUnmounted } from 'vue'

/* eslint-disable */

const scriptId = 'live-chat-widget-script'

declare global {
	interface Window {
		MessageBirdChatWidgetSettings: Record<string, any>
		MessageBirdChatWidget: Record<string, any>
		attachEvent: Function
	}
}

window.MessageBirdChatWidgetSettings = {
	widgetId: '09657a3d-1e30-4d7c-8806-9ebb737f7146',
	initializeOnLoad: true
}
window.MessageBirdChatWidget = {}
window.MessageBirdChatWidget.queue = []

export const useMessageBird = () => {
	onMounted(() => {
		const script = document.getElementById('live-chat-widget-script')
		if (!script) {
			let e, t
			for (let i = ['init', 'setConfig', 'toggleChat', 'identify', 'hide', 'on', 'shutdown'], n = function () {
				let e = i[d]
				window.MessageBirdChatWidget[e] = function () {
					for (let t = arguments.length, i = new Array(t), n = 0; n < t; n++) i[n] = arguments[n]
					window.MessageBirdChatWidget.queue.push([[e, i]])
				}
			}, d = 0; d < i.length; d++) n()
			let a = (null === (e = window) || void 0 === e || null === (t = e.MessageBirdChatWidgetSettings) || void 0 === t ? void 0 : t.widgetId) || '',
				o = function () {
					let e, t = document.createElement('script')
					t.type = 'text/javascript'
					t.src = 'https://livechat.messagebird.com/bootstrap.js?widgetId='.concat(a)
					t.async = true
					t.id = scriptId
					let i = document.getElementsByTagName('script')[0]
					null == i || null === (e = i.parentNode) || void 0 === e || e.insertBefore(t, i)
				}
			if (document.readyState === 'complete') o()
			else window.addEventListener('load', o, false)
		}
	})
	onUnmounted(() => {
		document.getElementById(scriptId)?.remove()
	})
}