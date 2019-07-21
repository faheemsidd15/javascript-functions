const array1 = [1, 3, 2, 5, 4, 7, 6, 8, 10, 11, 9, 13, 12, 15, 14, 16, 17, 18, 19, 21, 20, 22, 24]

const missingNumber = arr => {
	let sortedArr = arr.sort((a, b) => a - b)
	let number

	sortedArr.map((item, index) => {
		if (index + 1 !== item) {
			number = item - 1
		}
	})

	return number
}

console.log(missingNumber(array1))
