<template>
	<div class="rounded-[8px] lg:rounded-[24px] py-4 lg:py-7 px-4 lg:px-28 flex flex-col gap-8">
		<div class="flex justify-between items-center">
			<router-link class="flex gap-4 lg:gap-6 items-center" to="/">
				<img alt="" class="h-[36px] lg:h-[50px]" src="/images/icon.png">
				<img alt="" class="h-[24px] lg:h-[32px]" src="@/assets/images/logo/full.svg">
			</router-link>
			<div class="hidden lg:flex gap-[70px] items-center">
				<router-link v-for="{ name, route, special } in routes" :key="route" :class="{special}"
				             :to="route" class="capitalize flex flex-col gap-1 items-center font-bold"
				             exact-active-class="nav-link-active">
					<span>{{ name }}</span>
					<span v-if="!special" class="border-line" />
				</router-link>
			</div>
			<span class="text-2xl lg:hidden" @click="show = !show">{{ show ? '&times;' : '&#9776;' }}</span>
		</div>
		<div v-if="show" class="lg:hidden flex flex-col gap-8 fixed inset-y-0 inset-x-0 p-8 bg-white">
			<span class="text-3xl lg:hidden ml-auto" @click="show = !show">{{ show ? '&times;' : '&#9776;' }}</span>
			<router-link v-for="{ name, route, special } in routes" :class="{special}"
			             :to="route" class="capitalize flex flex-col gap-1 font-bold w-full items-end"
			             exact-active-class="nav-link-active" @click="show = false">
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
			{ name: 'Trade With Us', route: '/trade', special: true }
		]
		return { show, routes }
	}
})
</script>

<style lang="scss" scoped>
  .border-line {
    border: 1px solid $color-black;
    border-radius: 10rem;
    width: 100%;
    @media (min-width: $lg) {
      display: none;
      border: 2px solid #FD749B;
    }
  }

  .special {
    @media (min-width: $lg) {
      background: $color-gold;
      padding: .5rem 1rem;
      border-radius: 0.5rem;
    }
  }

  .nav-link-active {
    span {
      color: $color-gold;
      @media (min-width: $lg) {
        color: unset;
      }
    }

    .border-line {
      display: inline !important;
      @media (min-width: $lg) {
        width: 50%;
      }
    }
  }
</style>