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
					<img alt="" class="w-[65%]" src="@/assets/images/heroes/contact.svg">
				</div>
				<span
					class="lg:hidden w-[60%] text-center text-lg">We’re always there to help regardless the number of queries at hand.</span>
			</div>
			<svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M0,192L80,165.3C160,139,320,85,480,101.3C640,117,800,203,960,208C1120,213,1280,139,1360,101.3L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
					fill="#FFFFFF"
					fill-opacity="1"></path>
			</svg>
		</div>
	</div>
</template>