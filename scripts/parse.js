const HTMLParser = require('node-html-parser')
const fs = require('fs')

const c = (text) => (text[0]?.toUpperCase() ?? '') + text.slice(1)
const capitalize = (text) => text.split(' ').map(c).join(' ')

const getRange = (text) => {
	text = text.replaceAll(' ', '').replaceAll('$', '').trim()
	if (text.length === 0) return []
	return text.split('-').map((text) => {
		text = text.trim()
		const plus = text.includes('+')
		text = text.replaceAll('+', '').split('').filter((chr) => '1234567890'.includes(chr)).join('')
		const num = isNaN(parseFloat(text)) ? 0 : parseFloat(text)
		return { num, plus }
	})
}

const getCryptos = (table) => {
	return table.querySelectorAll('tr').slice(1).map((row) => {
		const nodes = row.childNodes
		const names = nodes[0].querySelectorAll('p').map((span) => span.innerText)
		const title = names[0]
		const code = names[1]
		const price = parseFloat(nodes[1].innerText.replaceAll('$', ''))
		const perChange = parseFloat(nodes[2].innerText.replaceAll('%', ''))
		const range = getRange(nodes[3].innerText)
		return {
			title: capitalize(title),
			range,
			data: {
				code,
				price: isNaN(price) ? 0 : price,
				perChange: isNaN(perChange) ? 0 : perChange
			}
		}
	})
}

const getFunds = (table) => {
	return table.querySelectorAll('tr').slice(1).map((row) => {
		const nodes = row.childNodes
		const tags = nodes[1].querySelectorAll('span').map((span) => span.innerText).filter((t) => t)
		const range = getRange(nodes[2].innerText)
		const image = nodes[0].querySelectorAll('img')[0]?.getAttribute('src') ?? null
		const title = nodes[0].querySelectorAll('h2')[0]?.innerText ?? ''
		const description = nodes[0].querySelectorAll('p')[0]?.innerText ?? ''

		return {
			title: capitalize(title),
			range,
			data: {
				description,
				image,
				tags
			}
		}
	})
}

const getCards = (table) => {
	const cards = table.querySelectorAll('tr').slice(1).map((row) => {
		const tr = row.querySelector('th')
		const image = tr?.querySelectorAll('img')[0]?.getAttribute('src') ?? null
		const title = tr?.querySelectorAll('h2')[0]?.innerText ?? ''
		const description = tr?.querySelectorAll('p')[0]?.innerText ?? ''

		const nodes = row.querySelectorAll('td')
		const form = nodes[0].querySelector('p')?.innerText ?? ''
		const tags = nodes[0].querySelectorAll('span').map((span) => span.innerText.toLowerCase())
		const country = nodes[1].innerText
		const range = getRange(nodes[2].innerText)

		return {
			title: capitalize(title),
			data: {
				description,
				image,
				form: form.toLowerCase(),
				country, tags
			},
			range
		}
	})
	const withTitles = cards.map((card, i) => card.title ? i : -1).filter((i) => i !== -1).reverse()
	return cards.map((card, i) => {
		if (card.title) return card
		const index = withTitles.find((x) => x < i)
		return {
			...card,
			title: cards[index].title,
			data: {
				...card.data,
				description: cards[index].description,
				image: cards[index].image
			}
		}
	})
}

const getContent = () => {
	const content = fs.readFileSync('scripts/crypto.html').toString()
	const root = HTMLParser.parse(content)
	const tables = root.querySelectorAll('table')
	if (tables.length !== 3) throw new Error('More than 3 tables. Recheck html page')

	return {
		crypto: getCryptos(tables[0]),
		funds: getFunds(tables[1]),
		cards: getCards(tables[2])
	}
}

fs.writeFileSync('src/utils/trades.json', JSON.stringify(getContent(), null, 4))