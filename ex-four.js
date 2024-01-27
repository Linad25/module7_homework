// консольное приложение на прототипах электроприборов 

// массив с включенными приборами
let listTurn = []

// родительский конструктор
function ElectricalDevice(name, weight, power) {
	this.weight = weight;
	this.type = "electric";
	this.power = power;
	this.name = name;
	this.connection = false;
}

// функция включения\выключения
ElectricalDevice.prototype.turn = function() {
	this.connection = !this.connection
	if (this.connection) {
		listTurn.unshift(this)
	} else {
		listTurn.splice(listTurn.indexOf(this), 1)
	}
	console.log(`${this.name} ${this.connection ? 'включён' : 'выключен'}`)
}

//компьютеры
function Computer(timeWork) {
	ElectricalDevice.call(this, "Computer", 2, 100)
	this.timeWork = timeWork;
}
Computer.prototype = Object.create(ElectricalDevice.prototype) 
Computer.prototype.changeTimeWork = function(newtimeWork) {
	this.timeWork = newtimeWork
	console.log(`${this.name} new Time Work is ${this.timeWork}`)
}
Computer.prototype.constructor = Computer

// лампы
function DeskLamp(brightness) {
	ElectricalDevice.call(this, "DeskLamp", 0.5, (40 * brightness / 20))
	this.brightness = brightness;
}
DeskLamp.prototype = Object.create(ElectricalDevice.prototype) 
DeskLamp.prototype.changeBrightness = function(newbrightness) {
	this.brightness = newbrightness;
	console.log(`${this.name} new Bryghtness is ${this.brightness}`)
}
DeskLamp.prototype.constructor = DeskLamp

// экземпляры
let firstDeskLamp = new DeskLamp(40, "firstDeskLamp")
let secondDeskLamp = new DeskLamp(30, "secondDeskLamp")
let firstComputer = new Computer(12, "firstComputer")
let secondComputer = new Computer(10, "secondComputer")

// вызов ориджинал методс
firstComputer.changeTimeWork(14)
secondDeskLamp.changeBrightness(40)

// включение выключение
firstDeskLamp.turn()
firstComputer.turn()
secondComputer.turn()
secondDeskLamp.turn()

let sumPower = 0
listTurn.forEach((item) => sumPower += +item.power)

console.log(sumPower)

