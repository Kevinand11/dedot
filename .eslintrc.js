module.exports = {
	env: {
		node: true
	},
	extends: [
		'plugin:vue/vue3-essential',
		'eslint:recommended',
		'@vue/typescript/recommended'
	],
	rules: {
		'@typescript-eslint/ban-ts-comment': 'off'
	}
}