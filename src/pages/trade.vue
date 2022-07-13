<template>
	<div>
		<div class="p-2 lg:p-[4rem]">
			<TradeHero class="min-h-[calc(100vh-0.75rem)] lg:min-h-[calc(100vh-4rem)]" />
		</div>
		<div class="p-2 lg:p-[4rem]">
			<TradeList />
		</div>
		<BottomNavigation />
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useMessageBird } from '../hooks/messagebird'

export default defineComponent({
	setup () {
		useMessageBird()
	}
})
</script>
