import { Trade } from '../utils/trade'
import { cards as rawCards, crypto as rawCrypto, funds as rawFunds } from '../utils/trades.json'
import { groupBy } from '../utils/commons'
import { onMounted, ref } from 'vue'
//@ts-ignore
import axios from 'axios'

type Crypto = {
	symbol: string
	name: string
	priceUsd: string
	changePercent24Hr: string
}

const global = {
	cryptos: ref([] as Crypto[]),
	loading: ref(false),
	fetched: ref(false),
	error: ref('')
}

export const useTrades = () => {
	const crypto = rawCrypto.map((c: any) => new Trade(c))
	const funds = rawFunds.map((c: any) => new Trade(c))
	const cards = rawCards.map((c: any) => new Trade(c))

	const trades = [crypto, funds, cards].flat()

	const groupedCards = groupBy(cards, (c) => c.title)

	return { trades, crypto, funds, cards, groupedCards }
}

export const useCryptoList = () => {
	const { crypto } = useTrades()
	const fetchCryptos = async () => {
		global.error.value = ''
		try {
			const res = await axios.get('https://api.coincap.io/v2/assets')
			const data = res.data.data as Crypto[]
			//@ts-ignore
			global.cryptos.value = data.filter((c) => crypto.map((a) => a.data.code).includes(c.symbol))
		} catch (e: unknown) {
			global.error.value = 'Failed to fetch cryptos'
		}
	}

	onMounted(fetchCryptos)

	return { ...global }
}