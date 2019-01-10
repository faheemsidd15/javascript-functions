var array1 = [2, 4, 6, 8, 9, 10]

const getNumberType = n => {
	n.forEach(el => {
		el % 2 !== 1 ? console.log(`${el} is even`) : console.log(`${el} is odd`)
	})
}
getNumberType(array1)
