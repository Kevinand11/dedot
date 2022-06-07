<template>
	<div class="hero p-4 lg:p-[56px] min-h-[100vh] gap-8 flex flex-col">
		<TopNavigation class="bg-white" />
		<div class="flex items-center flex-grow flex-col lg:flex-row-reverse">
			<div class="flex-grow w-full">
				<img alt="" class="w-full" src="@/assets/images/heroes/cards.svg">
			</div>
			<div class="flex-grow w-full flex flex-col  gap-4 lg:gap-11 font-bold text-2xl lg:pl-[100px]">
				<h1 class="font-black">
					<span>Start Trading<br /></span>
					<span class="text-gold">Digital Currencies<br /></span>
					<span>For Your Local Currency</span>
				</h1>
				<span>Trusted by thousands of customers and businesses</span>
				<div class="flex gap-4 lg:gap-[30px]">
					<button class="bg-gold">Start Trading</button>
					<button>Download the App</button>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
  .hero {
    background: conic-gradient(from 202.02deg at 67.6% 56.47%, $color-greenD 0deg, $color-greenL 85.4deg, $color-greenD 360deg);

    button {
      font-size: inherit;
      font-weight: 500;
      min-width: 180px;
      border: 4px solid $color-gold;
      padding: 1rem 0.5rem;
      border-radius: 6px;

      @media (min-width: $lg) {
        min-width: 300px;
      }
    }
  }
</style>