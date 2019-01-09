var seconds = 1546629998

const getTime = (seconds) => {
  
var hours = Math.floor(((seconds % 31536000) % 86400) / 3600)
var mins = Math.floor((((seconds % 31536000) % 86400) % 3600) / 60);
var secs = ((seconds % 86400) % 3600) % 60
  
  console.log("number of hours " + hours)
  console.log('number of min '+ mins)
  console.log('number of seconds '+ secs)
}


getTime(seconds)