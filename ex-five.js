// консольное приложение на прототипах электроприборов 

// массив с включенными приборами
let listTurn = []

// Родительский класс Электрических приборов
class ElectricalDevice {
	constructor(name, weight, power) {
		this.weight = weight;
		this.type = "electric";
		this.power = power;
		this.name = name;
		this.connection = false;
	}

	// метод вкл выкл
	turn() {
		this.connection = !this.connection
		if (this.connection) {
			listTurn.unshift(this)
		} else {
			listTurn.splice(listTurn.indexOf(this), 1)
		}
		console.log(`${this.name} ${this.connection ? 'включён' : 'выключен'}`)
	}
}

//наследующий класс компьютеров 
class Computer extends ElectricalDevice {
	constructor(timeWork, name, weight, power) {
		super(name, weight, power)
		this.timeWork = timeWork;
	}

	// ориджинал метод 
	changeTimeWork(newtimeWork) {
		this.timeWork = newtimeWork
		console.log(`${this.name} new Time Work is ${this.timeWork}`)
	}
}

// наследующий класс настольных ламп
class DeskLamp extends ElectricalDevice {
	constructor(brightness, name, weight) {
		super(name, weight)
		this.brightness = brightness
		this.power = 40 * brightness / 20;
	}

	// ориджинал метод 
	changeBrightness(newbrightness) {
		this.brightness = newbrightness;
		console.log(`${this.name} new Bryghtness is ${this.brightness}`)
	}
}

// экземпляры
let firstDeskLamp = new DeskLamp(20, "firstDeskLamp", 1)
let secondDeskLamp = new DeskLamp(30, "secondDeskLamp", 1.5)
let firstComputer = new Computer(10, "firstComputer", 2, 80)
let secondComputer = new Computer(12, "secondComputer", 2.5, 100)

// вызов ориджинал методс
firstComputer.changeTimeWork(14)
secondDeskLamp.changeBrightness(40)

// включение выключение
firstDeskLamp.turn()
firstComputer.turn()
secondComputer.turn()
secondDeskLamp.turn()

// функция аккумулятор
let sumPower = 0
listTurn.forEach((item) => sumPower += +item.power)

console.log(sumPower)

