const prototypeObj = {
   first: 1,
   second: 2,
}

const obj = Object.create(prototypeObj)
obj.third = 3

function ownProperty(object) {
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      console.log(key + ": " + object[key])
    }
  }
}

ownProperty(obj)