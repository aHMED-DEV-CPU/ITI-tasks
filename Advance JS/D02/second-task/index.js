"use strict"

// helper validation 

function ensureNumber(value, name) {
    if (typeof value !== "number")
        throw new TypeError(name + " must be a number")
}

function ensureString(value, name) {
    if (typeof value !== "string")
        throw new TypeError(name + " must be a string")
}


//  Vehicle (Base Class)


function Vehicle(speed, color) {

    if (this.constructor === Vehicle)
        throw new Error("Vehicle is abstract")

    ensureNumber(speed, "speed")
    ensureString(color, "color")

    let _speed = speed
    let _color = color

    Object.defineProperties(this, {

        speed: {
            get: () => _speed,
            enumerable: false,
            configurable: false
        },

        color: {
            get: () => _color,
            enumerable: false,
            configurable: false
        }

    })

    Object.preventExtensions(this)
}

/* Vehicle Methods */

Object.defineProperties(Vehicle.prototype, {

    turnLeft: {
        value: function () { return "Turning Left" },
        writable: false
    },

    turnRight: {
        value: function () { return "Turning Right" },
        writable: false
    },

    start: {
        value: function () { return true },
        writable: false
    },

    stop: {
        value: function () { return true },
        writable: false
    },

    goForward: {
        value: function (speed, accel) {
            ensureNumber(speed, "speed")
            ensureNumber(accel, "accel")
            return speed + accel
        }
    },

    goBackward: {
        value: function (speed, accel) {
            ensureNumber(speed, "speed")
            ensureNumber(accel, "accel")
            return speed - accel
        }
    },

    toString: {
        value: function () {
            return `Speed: ${this.speed}, Color: ${this.color}`
        }
    },

    valueOf: {
        value: function () {
            return this.speed
        }
    }

})


// Bicycle


function Bicycle(speed, color) {
    Vehicle.call(this, speed, color)
}

Bicycle.prototype = Object.create(Vehicle.prototype)
Bicycle.prototype.constructor = Bicycle

Object.defineProperty(Bicycle.prototype, "ringBell", {
    value: function () {
        return "Ring Ring!"
    }
})



//MotorVehicle


function MotorVehicle(speed, color, sizeOfEngine, licensePlate) {

    if (this.constructor === MotorVehicle)
        throw new Error("MotorVehicle is abstract")

    Vehicle.call(this, speed, color)

    ensureNumber(sizeOfEngine, "sizeOfEngine")
    ensureString(licensePlate, "licensePlate")

    let _engine = sizeOfEngine
    let _plate = licensePlate

    Object.defineProperties(this, {

        sizeOfEngine: {
            get: () => _engine,
            enumerable: false,
            configurable: false
        },

        licensePlate: {
            get: () => _plate,
            enumerable: false,
            configurable: false
        }

    })

    Object.preventExtensions(this)
}

MotorVehicle.prototype = Object.create(Vehicle.prototype)
MotorVehicle.prototype.constructor = MotorVehicle

Object.defineProperties(MotorVehicle.prototype, {

    getSizeOfEngine: {
        value: function () { return this.sizeOfEngine }
    },

    getLicensePlate: {
        value: function () { return this.licensePlate }
    }

})



//Car


function Car(speed, color, sizeOfEngine, licensePlate,
    numOfDoors, numOfWheels, weight) {

    MotorVehicle.call(this, speed, color, sizeOfEngine, licensePlate)

    ensureNumber(numOfDoors, "numOfDoors")
    ensureNumber(numOfWheels, "numOfWheels")
    ensureNumber(weight, "weight")

    let _doors = numOfDoors
    let _wheels = numOfWheels
    let _weight = weight

    Object.defineProperties(this, {

        numOfDoors: { get: () => _doors },
        numOfWheels: { get: () => _wheels },
        weight: { get: () => _weight }

    })

    Object.preventExtensions(this)
}

Car.prototype = Object.create(MotorVehicle.prototype)
Car.prototype.constructor = Car

Object.defineProperty(Car.prototype, "switchOnAirCon", {
    value: function () {
        return "Air Conditioner On"
    }
})



//DumpTruck


function DumpTruck(speed, color, sizeOfEngine, licensePlate,
    loadCapacity, numWheels, weight) {

    MotorVehicle.call(this, speed, color, sizeOfEngine, licensePlate)

    ensureNumber(loadCapacity, "loadCapacity")
    ensureNumber(numWheels, "numWheels")
    ensureNumber(weight, "weight")

    let _load = loadCapacity
    let _wheels = numWheels
    let _weight = weight

    Object.defineProperties(this, {

        loadCapacity: { get: () => _load },
        numWheels: { get: () => _wheels },
        weight: { get: () => _weight }

    })

    Object.preventExtensions(this)
}

DumpTruck.prototype = Object.create(MotorVehicle.prototype)
DumpTruck.prototype.constructor = DumpTruck

Object.defineProperties(DumpTruck.prototype, {

    lowerLoad: {
        value: function () { return "Lowering Load" }
    },

    raiseLoad: {
        value: function () { return "Raising Load" }
    }

})
