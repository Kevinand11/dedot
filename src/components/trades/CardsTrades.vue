<template>
	<div>
		<div class="hidden lg:flex items-center py-4 font-lg font-semibold gap-4">
			<span class="w-[40%]">Name</span>
			<span class="w-[16%]">Form</span>
			<span class="w-[16%]">Country</span>
			<span class="w-[16%]">Range</span>
			<span class="w-[10%]" />
		</div>
		<div v-for="{ key, values } in groupedCards" :key="key" class="card flex flex-col lg:flex-row py-4 gap-4">
			<div class="lg:w-[40%]">
				<div class="flex items-center gap-2">
					<img v-if="values[0].data.image" :src="values[0].data.image" alt="" class="w-10"
					     onerror="this.classList.add('hidden')">
					<span class="text-lg">{{ values[0].title }}</span>
				</div>
				<div v-if="values[0].data.description" class="break-all mt-2">{{ values[0].data.description }}</div>
			</div>
			<div class="w-[60%] hidden lg:flex flex-col">
				<div v-for="(value, i) in values" :key="key + i" class="flex gap-4 items-center py-4">
					<div class="w-[27%] flex flex-col gap-2">
						<span>{{ value.data.form }}</span>
						<div class="tags">
							<span v-for="tag in value.data.tags" :key="tag" class="tag">{{ tag }}</span>
						</div>
					</div>
					<div class="w-[27%]">{{ value.data.country }}</div>
					<div class="w-[27%]">{{ formatRange(value.range) }}</div>
					<div class="w-[19%]"></div>
				</div>
			</div>
			<div class="flex lg:hidden flex-col gap-4">
				<div class="tags">
					<span v-for="country in [...new Set(values.map((value) => value.data.country))]" :key="country"
					      class="tag">{{ country }}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useTrades } from '../../hooks/trades'
import { formatRange } from '../../utils/commons'

export default defineComponent({
	setup () {
		const { groupedCards } = useTrades()
		return { groupedCards, formatRange }
	}
})
</script>

<style lang="scss" scoped>
  .card {
    @media (max-width: $lg) {
      padding: 2rem;
      background: $color-white;
      border-radius: 0.5rem;
      box-shadow: 0 4px 6px 2px rgba(0, 0, 0, 0.1), 0 2px 4px 2px rgba(0, 0, 0, 0.06);
      margin-bottom: 2rem;
    }
    @media (min-width: $lg) {
      border-top: 1px solid #D1D1D1;
      border-bottom: 1px solid #D1D1D1;
    }
  }
</style>