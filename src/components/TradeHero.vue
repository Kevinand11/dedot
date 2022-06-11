<template>
	<div class="flex flex-col">
		<TopNavigation class="bg-greenD mb-4 lg:mb-8" />
		<div class="flex-grow flex flex-col bg-greenL">
			<div class="flex items-center flex-grow flex-col lg:flex-row p-4 justify-center gap-16 lg:gap-0">
				<div class="lg:flex-grow w-full flex flex-col lg:gap-5 text-lg lg:pl-[212px] text-center lg:text-left">
					<span class="text-sm hidden lg:inline">HOME/CONTACT US</span>
					<h2 class="font-bold">
						24/7 Customer support<br />
						Including weekends.
					</h2>
					<span
						class="hidden lg:inline text-lg">We’re always there to help regardless the number of queries at hand.</span>
				</div>
				<div class="lg:flex-grow w-full flex justify-center">
					<img alt="" class="w-[65%]" src="@/assets/images/heroes/cards.svg">
				</div>
			</div>
			<Wave />
		</div>
	</div>
</template>