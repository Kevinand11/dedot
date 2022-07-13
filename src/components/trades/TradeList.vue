<template>
	<div class="flex flex-col items-center">
		<div class="div max-w-[800px] flex w-full">
			<span v-for="trade in TradeEnum" :key="trade" :class="{'bg-gold shadowy': trade === tab}"
			      class="flex-grow capitalize p-4 lg:p-6 text-center text-lg" @click="tab = trade">
				{{ trade }}
			</span>
		</div>
		<div class="trade shadowy w-full max-w-[1200px]">
			<CryptoTrades v-if="tab === TradeEnum.crypto" />
			<FundsTrades v-if="tab === TradeEnum.funds" />
			<CardsTrades v-if="tab === TradeEnum.cards" />
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { TradeEnum } from '../../utils/trade'

export default defineComponent({
	setup () {
		const tab = ref(TradeEnum.crypto)
		return { tab, TradeEnum }
	}
})
</script>


<style lang="scss" scoped>
  .trade {
    padding: 1rem;
    background: $color-white;
    border-radius: 0.5rem;
    @media (min-width: $lg) {
      padding: 3rem;
      border: 1px solid #D1D1D1;
    }
  }

  .shadowy {
    box-shadow: 0 4px 6px 2px rgba(0, 0, 0, 0.1), 0 2px 4px 2px rgba(0, 0, 0, 0.06);
  }
</style>