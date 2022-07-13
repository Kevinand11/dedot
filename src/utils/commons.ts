import { Range } from './trade'

export const getRandomValue = () => Date.now() + Math.random().toString(36)

export function groupBy<Type, Unique extends string | number> (array: Array<Type>, func: (item: Type) => Unique) {
	return array.reduce((acc, cur) => {
		const key = func(cur)
		const index = acc.findIndex((a) => a.key === key)
		if (index === -1) acc.push({ key, values: [cur] })
		else acc[index].values.push(cur)
		return acc
	}, [] as { key: Unique, values: Type[] }[])
}

export const formatRange = (range: Range[]) => {
	return (range.length > 0 ? range : [{
		num: 0, plus: false
	}]).map((r) => ['$', r.num, r.plus ? '+' : ''].join('')).join(' to ')
}