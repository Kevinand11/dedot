import { getRandomValue } from './commons'

export class Trade {
	public readonly id: string
	public readonly title: string
	public readonly range: Range[]
	public readonly data: TradeData

	constructor ({ title, range, data }: TradeModel) {
		this.id = getRandomValue()
		this.title = title
		this.range = range
		this.data = data
	}

	get isCrypto () {
		return this.data.type === TradeEnum.crypto
	}

	get isFunds () {
		return this.data.type === TradeEnum.funds
	}

	get isCards () {
		return this.data.type === TradeEnum.cards
	}
}

export type Range = { num: number, plus: boolean }

export enum TradeEnum {
	crypto = 'crypto',
	funds = 'funds',
	cards = 'cards'
}

type CryptoTrade = {
	type: TradeEnum.crypto
	code: string
	price: number
	perChange: number
}

type FundsTrade = {
	type: TradeEnum.funds
	description: ''
	image: string | null
	tags: string[]
}

type CardsTrade = {
	type: TradeEnum.cards
	description: ''
	image: string | null
	form: string
	country: string
	tags: string[]
}

type TradeData = CryptoTrade | FundsTrade | CardsTrade

type TradeModel = {
	title: string
	range: Range[]
	data: TradeData
}