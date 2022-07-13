<template>
	<div>
		<div class="hidden lg:flex items-center py-4 font-lg font-semibold gap-4">
			<span class="w-[50%]">Name</span>
			<span class="w-[20%]">Price</span>
			<span class="w-[20%]">Range</span>
			<span class="w-[10%]" />
		</div>
		<div v-for="cur in crypto" :key="cur.id" class="crypto flex flex-col lg:flex-row lg:items-center py-4 gap-4">
			<div class="lg:w-[50%] flex items-center gap-1">
				<span class="text-lg">{{ cur.title }}</span>
				<span>{{ cur.data.code }}</span>
			</div>
			<span
				:class="Number(cryptos.find((c) => c.symbol === cur.data.code)?.changePercent24Hr ?? cur.data.perChange) > 0 ? 'text-[#16C7C4]' : 'text-[#DC143C]'"
				class="lg:w-[20%]">
				${{ Number(cryptos.find((c) => c.symbol === cur.data.code)?.priceUsd ?? cur.data.price).toFixed(2) }}
			</span>
			<span class="lg:w-[20%] flex flex-col">
				<span class="font-semibold lg:hidden">Range</span>
				<span>{{ formatRange(cur.range) }}</span>
			</span>
			<span class="w-[10%]" />
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useCryptoList, useTrades } from '../../hooks/trades'
import { formatRange } from '../../utils/commons'

export default defineComponent({
	setup () {
		const { crypto } = useTrades()
		const { cryptos } = useCryptoList()
		return { crypto, cryptos, formatRange }
	}
})
</script>

<style lang="scss" scoped>
  .crypto {
    @media (max-width: $lg) {
      padding: 2rem;
      background: $color-white;
      border-radius: 0.5rem;
      box-shadow: 0 4px 6px 2px rgba(0, 0, 0, 0.1), 0 2px 4px 2px rgba(0, 0, 0, 0.06);
      margin-bottom: 2rem;
    }
  }
</style>