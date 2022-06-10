<template>
	<div class="flex items-center flex-col gap-6 lg:gap-[72px] w-full max-w-[1000px] mx-auto">
		<h2 class="text-center">What <span class="text-gold">Users</span> are saying about Us</h2>
		<div class="flex items-center gap-8 lg:gap-16 w-full">
			<span class="font-bold text-3xl" @click="previous">&langle;</span>
			<div class="flex-grow bg-greenL rounded-xl flex flex-col items-center p-4 lg:p-16 gap-2 lg:gap-6">
				<template v-if="testimonials[tab]">
					<img :src="testimonials[tab].image" alt="" class="h-24 w-24 lg:w-40 lg:h-40">
					<h3 class="font-bold mb-2">{{ testimonials[tab].name }}</h3>
					<p class="text-lg lg:text-2xl">{{ testimonials[tab].testimony }}</p>
				</template>
			</div>
			<span class="font-bold text-3xl" @click="next">&rangle;</span>
		</div>
		<div class="flex gap-2">
			<span v-for="(_, i) in testimonials" :key="i" :class="{'bg-black': i === tab}"
			      class="rounded-full h-2 w-2 border border-black" @click="tab = i" />
		</div>
	</div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'

export default defineComponent({
	name: 'Testimonials',
	setup () {
		const tab = ref(0)
		const testimonials = [
			{ name: 'Adekunle Adeoyi', image: '/images/testimonials/image.png', testimony: 'Nice 1' },
			{ name: 'Adekunle Adeoyi 2', image: '/images/testimonials/image.png', testimony: 'Nice 2' },
			{ name: 'Adekunle Adeoyi 3', image: '/images/testimonials/image.png', testimony: 'Nice 3' },
			{ name: 'Adekunle Adeoyi 4', image: '/images/testimonials/image.png', testimony: 'Nice 4' },
			{ name: 'Adekunle Adeoyi 5', image: '/images/testimonials/image.png', testimony: 'Nice 5' }
		]
		const canPrev = computed(() => tab.value > 0)
		const canNext = computed(() => tab.value < (testimonials.length - 1))
		const previous = () => {
			if (canPrev.value) tab.value--
		}
		const next = () => {
			if (canNext.value) tab.value++
		}
		return { testimonials, tab, canPrev, canNext, previous, next }
	}
})
</script>