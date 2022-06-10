<template>
	<div>
		<div class="p-2 lg:p-[4rem]">
			<ContactHero class="min-h-[calc(100vh-0.75rem)] lg:min-h-[calc(100vh-4rem)]" />
			<div class="px-2 lg:w-1/2 mx-auto flex flex-col gap-8 lg:gap-16">
				<p class="text-center text-lg">Please note that all message will be replied within the next 12hours</p>
				<ContactForm />
			</div>
			<div class="px-2 my-40 flex flex-col max-w-[600px] mx-auto items-center">
				<div
					class="bg-white p-16 w-full flex flex-col justify-center items-center shadowy rounded-2xl aspect-square gap-4">
					<span class="flex items-center gap-2 w-[260px]">
						<img class="w-6" src="@/assets/images/icons/phone-call.svg">
						<span>(+234) 705 161 2426</span>
					</span>
					<span class="flex items-center gap-2 w-[260px]">
						<img class="w-6" src="@/assets/images/icons/email.svg">
						<span>dedotngofficial@gmail.com</span>
					</span>
				</div>
				<div class="w-7 h-7 bg-white shadowy z-[1]"
				     style="transform: rotate(45deg) translateY(-55%);" />
				<div class="bg-[#6FCF97] border border-greenD rounded-full w-8 h-8"
				     style="transform: translate(25%,-50%);" />
			</div>
		</div>
		<BottomNavigation />
	</div>
</template>

<style>
    .shadowy {
        box-shadow: 4px 13px 65px rgba(154, 154, 154, 0.5);
    }
</style>
