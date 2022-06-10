<template>
	<div>
		<HomeHero class="min-h-[100vh]" />
		<div class="px-8 py-20 lg:px-32 lg:py-24 flex flex-col gap-20 lg:gap-[160px]">
			<div class="flex justify-center gap-8 lg:gap-[160px] items-center companies">
				<img alt="" src="@/assets/images/companies/amazon.svg">
				<img alt="" src="@/assets/images/companies/starbucks.svg">
				<img alt="" class="walmart" src="@/assets/images/companies/walmart.svg">
				<img alt="" src="@/assets/images/companies/starbucks.svg">
				<img alt="" src="@/assets/images/companies/apple.svg">
			</div>
			<About />
			<Testimonials />
		</div>
		<BottomNavigation />
	</div>
</template>

<style lang="scss" scoped>
  .companies {
    img {
      flex: 1;
      width: 25px;
      @media (min-width: $lg) {
        width: 80px;
        flex: unset;
      }
    }

    .walmart {
      flex: 4;
      width: 100px;
      @media (min-width: $lg) {
        width: 320px;
        flex: unset;
      }
    }
  }
</style>
