<template>
	<div class="lg:rounded-[24px] py-4 lg:py-7 px-4 lg:px-28 flex justify-between items-center w-full">
		<div class="flex gap-6 items-center">
			<img alt="" class="h-[50px]" src="/icon.png">
			<img alt="" class="h-[32px]" src="@/assets/images/logo/full.svg">
		</div>
		<div class="flex gap-[70px]">
			<router-link v-for="{ name, route } in [
				{ name: 'Home', route: '/' },
				{ name: 'About', route: '/about' },
				{ name: 'Contact Us', route: '/contact' },
				{ name: 'Trade With Us', route: '/trade' }
			]" :key="route" :to="route" class="capitalize flex flex-col gap-1 items-center font-bold"
			             exact-active-class="nav-link-active">
				<span>{{ name }}</span>
				<span class="border-line rounded-full w-[50%] hidden" />
			</router-link>
		</div>
	</div>
</template>

<style lang="scss" scoped>
  .nav-link-active {
    .border-line {
      display: inline !important;
      border: 2px solid #FD749B;
    }
  }
</style>