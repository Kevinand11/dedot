<template>
	<div>
		<div class="hidden lg:flex items-center py-4 font-lg font-semibold gap-4">
			<span class="w-[40%]">Name</span>
			<span class="w-[30%]">Utility Methods</span>
			<span class="w-[20%]">Range</span>
			<span class="w-[10%]" />
		</div>
		<div v-for="fund in funds" :key="fund.id" class="fund flex flex-col lg:flex-row lg:items-center py-4 gap-4">
			<div class="lg:w-[40%]">
				<div class="flex items-center gap-2">
					<img v-if="fund.data.image" :src="fund.data.image" alt="" class="w-8">
					<span class="text-lg">{{ fund.title }}</span>
				</div>
				<div v-if="fund.data.description" class="break-all mt-2">{{ fund.data.description }}</div>
			</div>
			<div class="lg:w-[30%] tags">
				<span v-for="tag in fund.data.tags" :key="tag" class="tag">{{ tag }}</span>
			</div>
			<span class="lg:w-[20%] flex flex-col">
				<span class="font-semibold lg:hidden">Range</span>
				<span>{{ formatRange(fund.range) }}</span>
			</span>
			<span class="w-[10%]" />
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useTrades } from '../../hooks/trades'
import { formatRange } from '../../utils/commons'

export default defineComponent({
	setup () {
		const { funds } = useTrades()
		return { funds, formatRange }
	}
})
</script>

<style lang="scss" scoped>
  .fund {
    @media (max-width: $lg) {
      padding: 2rem;
      background: $color-white;
      border-radius: 0.5rem;
      box-shadow: 0 4px 6px 2px rgba(0, 0, 0, 0.1), 0 2px 4px 2px rgba(0, 0, 0, 0.06);
      margin-bottom: 2rem;
    }
  }
</style>