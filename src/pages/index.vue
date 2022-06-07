<template>
	<div class="hero p-[56px] min-h-[100vh] gap-8 flex flex-col">
		<TopNavigation class="bg-white" />
		<div class="flex items-center flex-grow">
			<div class="flex-grow w-full flex flex-col gap-[45px] font-bold text-[24px] pl-[100px]">
				<span class="text-[64px] font-black">
					<span>Start Trading<br /></span>
					<span class="text-gold">Digital Currencies<br /></span>
					<span>For Your Local Currency</span>
				</span>
				<span>Trusted by thousands of customers and businesses</span>
				<div class="flex gap-[30px]">
					<button class="bg-gold">Start Trading</button>
					<button>Download the App</button>
				</div>
			</div>
			<div class="flex-grow w-full">
				<img alt="" class="w-full" src="@/assets/images/heroes/cards.svg">
			</div>
		</div>
	</div>
	<div class="h-screen w-screen bg-green flex items-center justify-center">
		<img class="w-30" src="@/assets/images/message.svg" />
	</div>
</template>

<style lang="scss">
  .hero {
    background: conic-gradient(from 202.02deg at 67.6% 56.47%, $color-greenD 0deg, $color-greenL 85.4deg, $color-greenD 360deg);

    button {
      font-size: inherit;
      font-weight: 500;
      min-width: 300px;
      border: 4px solid $color-gold;
      padding: 1rem 0.5rem;
      border-radius: 6px;
    }
  }
</style>
