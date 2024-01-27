proobj = {
	second: 2,
 }
 
 let obj = Object.create(proobj)
 
 obj = {
	first: 1,
 }
 
 function checkingAvailability(string, object) {
	if (object.hasOwnProperty(string)) {
	  return console.log(true)
	} else {
	  return console.log(false)
	}
 }
 
 checkingAvailability("first", obj);
 checkingAvailability("firs", obj);
 checkingAvailability("second", obj);