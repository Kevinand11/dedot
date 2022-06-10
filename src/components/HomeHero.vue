<template>
	<div class="hero p-4 lg:p-[56px] gap-8 flex flex-col">
		<TopNavigation class="bg-white" />
		<div class="flex items-center flex-grow flex-col lg:flex-row justify-center gap-4">
			<div
				class="lg:flex-grow w-full flex flex-col  gap-4 lg:gap-11 font-bold lg:text-2xl lg:pl-[100px]">
				<h1 class="font-black text-center lg:text-left">
					<span>Start Trading<br /></span>
					<span class="text-gold">Digital Currencies<br /></span>
					<span>For Your Local Currency</span>
				</h1>
				<span class="font-bold hidden lg:inline">Trusted by thousands of customers and businesses</span>
				<div class="flex gap-4 lg:gap-[30px] justify-center lg:justify-start">
					<button class="bg-gold">Start Trading</button>
					<router-link to="/apps">
						<button>Download the App</button>
					</router-link>
				</div>
			</div>
			<div class="lg:flex-grow w-full">
				<img alt="" class="w-full" src="@/assets/images/heroes/cards.svg">
			</div>
			<span
				class="font-bold lg:hidden w-[60%] text-center">Trusted by thousands of customers and businesses</span>
		</div>
	</div>
</template>

<style lang="scss">
  .hero {
    background: conic-gradient(from 202.02deg at 67.6% 56.47%, $color-greenD 0deg, $color-greenL 85.4deg, $color-greenD 360deg);
  }
</style>