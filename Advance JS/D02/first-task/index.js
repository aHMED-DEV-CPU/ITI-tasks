"use strict";



function Shape() {
    // Abstract class
    if (this.constructor === Shape) {
        throw new Error("Cannot create object from abstract class Shape")
    }
}

// Rec inherit from Shape 
function Rectangle(width, height) {

    Shape.call(this) // inherit constructor


    if (width <= 0 || height <= 0) {
        throw new Error("Width and Height must be positive")
    }

    // private values (closure)
    let _width = width
    let _height = height

    Object.defineProperty(this, "width", {
        get: function () { return _width },
        set: function () { throw new Error("Cannot modify width") },
        enumerable: false,
        configurable: false
    })

    Object.defineProperty(this, "height", {
        get: function () { return _height },
        set: function () { throw new Error("Cannot modify height") },
        enumerable: false,
        configurable: false
    })
}

// Prototype Inheritance
Rectangle.prototype = Object.create(Shape.prototype)
Rectangle.prototype.constructor = Rectangle


/* =========================
   Rectangle Methods
========================= */

Object.defineProperty(Rectangle.prototype, "area", {
    value: function () {
        return this.width * this.height
    },
    writable: false,
    enumerable: false,
    configurable: false
})

Object.defineProperty(Rectangle.prototype, "perimeter", {
    value: function () {
        return 2 * (this.width + this.height)
    },
    writable: false,
    enumerable: false,
    configurable: false
})

Object.defineProperty(Rectangle.prototype, "toString", {
    value: function () {
        return `Rectangle => width: ${this.width}, height: ${this.height},
Area: ${this.area()},
Perimeter: ${this.perimeter()}`
    },
    writable: false,
    enumerable: false,
    configurable: false
})

Object.defineProperty(Rectangle.prototype, "valueOf", {
    value: function () {
        return this.area()
    },
    writable: false,
    enumerable: false,
    configurable: false
})


// square constructor inherit from rectangle 

function Square(side) {

    Rectangle.call(this, side, side)

    Square._count++

}

// Prototype Inheritance
Square.prototype = Object.create(Rectangle.prototype)
Square.prototype.constructor = Square


// count Nio. of squares 
Object.defineProperty(Square, "_count", {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: false
})

Object.defineProperty(Square, "count", {
    get: function () {
        return Square._count
    },
    enumerable: false,
    configurable: false
})


// for testing 

let r1 = new Rectangle(10, 6)  // area = 60
let r2 = new Rectangle(37, 1)  // area = 37

console.log(r1.toString())
console.log(r2.toString())

console.log(r1 + r2) // 97
console.log(r1 - r2) // 23

let s1 = new Square(5)
let s2 = new Square(7)

console.log(s1.toString())
console.log("Squares Created:", Square.count)


