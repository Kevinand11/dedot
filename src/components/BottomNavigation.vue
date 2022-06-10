<template>
	<div>
		<div class="bg-gold p-6 pt-8 pb-20 lg:px-24 flex flex-col lg:flex-row gap-8">
			<div class="flex flex-col gap-4">
				<h3 class="font-bold">True love feels like DEDOT</h3>
				<p class="mb-4">We are the perfect companion, always there with you all the steps of the way, making
					life easy. Our doors are always open, we are waiting for you.</p>
				<div class="flex gap-4 items-center">
					<span class="p-4 bg-white rounded-lg">
						<img alt="" class="h-6 w-6" src="@/assets/images/socials/twitter.svg">
					</span>
					<a class="p-4 bg-white rounded-lg" href="https://www.instagram.com/dedot_ng" target="_blank">
						<img alt="" class="h-6 w-6" src="@/assets/images/socials/instagram.svg">
					</a>
				</div>
			</div>
			<div class="flex-grow w-full grid grid-cols-2 lg:grid-cols-4 gap-8">
				<div v-for="section in sections" :key="section.label"
				     class="flex flex-col gap-4 lg:gap-8">
					<h4 class="font-bold">{{ section.label }}</h4>
					<component :is="link.external ? 'a' : 'router-link'" v-for="link in section.links" :key="link.label"
					           :href="link.link" :to="link.link" class="truncate" style="opacity: 50%;"
					           target="_blank">
						{{ link.label }}
					</component>
				</div>
			</div>
		</div>
		<div class="bg-black text-white flex justify-center lg:justify-between gap-4 items-center p-6 lg:px-24">
			<p>All Right Reserved - DEDOT, {{ new Date().getFullYear() }}</p>
			<div class="items-center gap-2 hidden lg:flex">
				<router-link to="/apps">
					<img alt="" src="@/assets/images/stores/apple.svg">
				</router-link>
				<router-link to="/apps">
					<img alt="" src="@/assets/images/stores/google.svg">
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'BottomNavigation',
	setup () {
		const sections = [
			{
				label: 'Contact', links: [
					{ label: '+234-705-1612-426', link: 'tel:+2347051612426', external: true },
					{ label: 'dedotngofficial@gmail.com', link: 'mailto:dedotngofficial@gmail.com', external: true }
				]
			},
			{
				label: 'Company', links: [
					{ label: 'About', link: '/about', external: false },
					{ label: 'Blog', link: '/blog', external: false }
				]
			},
			{
				label: 'Legal', links: [
					{ label: 'Terms & Conditions', link: '/legal/terms-and-conditions', external: false },
					{ label: 'Privacy & Policy', link: '/legal/privacy-and-policy', external: false }
				]
			},
			{
				label: 'Help', links: [
					{ label: 'FAQs', link: '/faqs', external: false }
				]
			}
		]
		return { sections }
	}
})
</script>