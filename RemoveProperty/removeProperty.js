const object = {
	person: "this is a person",
	person2: "this is a person 2"
}

const remove = (obj, prop) => {
	const arr = Object.keys(obj)

	const checker = arr.map(keys => {
		if (keys === prop) {
			return delete obj[keys]
		}
	})

	console.log(obj)
	return obj
}

remove(object, "person2")
