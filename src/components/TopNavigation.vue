<template>
	<div class="rounded-[8px] lg:rounded-[24px] py-4 lg:py-7 px-4 lg:px-28 flex flex-col gap-8">
		<div class="flex justify-between items-center">
			<div class="flex gap-4 lg:gap-6 items-center">
				<img alt="" class="h-[36px] lg:h-[50px]" src="/icon.png">
				<img alt="" class="h-[24px] lg:h-[32px]" src="@/assets/images/logo/full.svg">
			</div>
			<div class="hidden lg:flex gap-[70px]">
				<router-link v-for="{ name, route } in routes" :key="route" :to="route"
				             class="capitalize flex flex-col gap-1 items-center font-bold"
				             exact-active-class="nav-link-active">
					<span>{{ name }}</span>
					<span class="border-line" />
				</router-link>
			</div>
			<span class="text-2xl lg:hidden" @click="show = !show">{{ show ? '&times;' : '&#9776;' }}</span>
		</div>
		<div v-if="show" class="lg:hidden flex flex-col gap-8 items-center">
			<router-link v-for="{ name, route } in routes" :key="route" :to="route"
			             class="capitalize flex flex-col gap-1 items-center font-bold"
			             exact-active-class="nav-link-active">
				<span>{{ name }}</span>
				<span class="border-line" />
			</router-link>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
	setup () {
		const show = ref(false)
		const routes = [
			{ name: 'Home', route: '/' },
			{ name: 'About', route: '/about' },
			{ name: 'Contact Us', route: '/contact' },
			{ name: 'Trade With Us', route: '/trade' }
		]
		return { show, routes }
	}
})
</script>

<style lang="scss" scoped>
  .border-line {
    display: none;
  }

  .nav-link-active {
    .border-line {
      display: inline !important;
      border: 2px solid #FD749B;
      width: 50%;
      border-radius: 10rem;
    }
  }
</style>