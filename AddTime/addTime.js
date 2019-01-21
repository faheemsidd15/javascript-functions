let time = 1548093011

//param(timeStamp) needs to be seconds

const addTime = (timeStamp, number, type) => {
	if (type === "days") {
		let addedDays = timeStamp + number * 86400
		console.log(addedDays)
		return addedDays
	}

	if (type === "hours") {
		let addedHours = timeStamp + number * 3600
		console.log(addedHours)
		return addedHours
	}

	if (type === "minutes") {
		let addedMinutes = timeStamp + number * 60
		console.log(addedMinutes)
		return addedMinutes
	}

	if (type === "seconds") {
		let addedSeconds = timeStamp + number
		console.log(addedSeconds)
		return addedSeconds
	}
}

// Use this function if NO Moment or DateFNS
const convertTime = timeStamp => {
	let date = new Date(timeStamp * 1000)
	var hours = date.getHours()
	var minutes = "0" + date.getMinutes()
	var seconds = "0" + date.getSeconds()
	var formattedTime = hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2)
	console.log(formattedTime)
	return formattedTime
}

convertTime(addTime(time, 5, "minutes"))
