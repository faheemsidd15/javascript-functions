const names = "John Doe; Peter Benjemin Parker; Angie Smith"
const company = "Example"

const solution = (names, company) => {
	let seperatedNames = names.split("; ")
	const newCompany = company.toLowerCase()

	const newN = seperatedNames.map(names => {
		const newNames = names.split(" ")
		const firstName = newNames[0].toLowerCase()
		const lastName = newNames[newNames.length - 1].toLowerCase()
		return `${firstName}_${lastName}@${newCompany}.com`
	})

	const final = newN.toString().replace(",", "; ")
	console.log(final)
	return final
}

solution(names, company)
