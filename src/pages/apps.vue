<template>
	<div class="fixed inset-y-0 inset-x-0 flex flex-col justify-center items-center p-8 gap-8 bg-greenL text-center">
		<router-link class="flex gap-4 lg:gap-6 items-center" to="/">
			<img alt="" class="h-[50px]" src="/images/icon.png">
			<img alt="" class="h-[32px]" src="@/assets/images/logo/full.svg">
		</router-link>
		<p class="text-2xl font-bold">Apps are coming to both stores soon!</p>
		<div class="items-center gap-4 flex">
			<img alt="" src="@/assets/images/stores/apple.svg">
			<img alt="" src="@/assets/images/stores/google.svg">
		</div>
	</div>
</template>