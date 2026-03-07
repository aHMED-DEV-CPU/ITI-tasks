// task 1
class Polygon {
    // CTr function 
    constructor(name, noOfSides) {
        // make abstract class
        if (this.constructor == Polygon) {
            throw new Error("That class is an abstract class ");
        }
        this.name = name
        this.noOfSides = noOfSides
    }
    calcArea() {
        throw new Error("You can't call the function fom base class");
    }
    calcPerimeter() {
        throw new Error("You can't call the function fom base class");
    }
}
//square class
class Square extends Polygon {
    constructor(sideLength) {
        super("Square", 4)
        this.sideLength = sideLength
    }
    calcArea() {
        return this.sideLength * this.sideLength
    }
    calcPerimeter() {
        return this.noOfSides * this.sideLength
    }
    toString() {
        return ` the ${this.name} Area = ${this.calcArea()} , Perimeter = ${this.calcPerimeter()}`
    }
}

//rectangle class
class Rectangle extends Polygon {
    constructor(length, width) {
        super("rectangle", 4)
        this.length = length
        this.width = width
    }
    calcArea() {
        return this.length * this.width
    }
    calcPerimeter() {
        return 2 * (this.length + this.width)
    }
    toString() {
        return ` the ${this.name} Area = ${this.calcArea()} , Perimeter = ${this.calcPerimeter()}`
    }
}

//Triangle class
class Triangle extends Polygon {
    constructor(side1, side2, side3) {
        super("Triangle", 3)
        this.side1 = side1
        this.side2 = side2
        this.side3 = side3
    }
    calcArea() {
        let s = (this.side1 + this.side2 + this.side3) / 2;

        return Math.sqrt(
            s *
            (s - this.side1) *
            (s - this.side2) *
            (s - this.side3)
        );
    }
    calcPerimeter() {

        return this.side1 + this.side2 + this.side3
    }
    toString() {
        return ` the ${this.name} Area = ${this.calcArea()} , Perimeter = ${this.calcPerimeter()}`
    }
}

//Circle class
class Circle extends Polygon {
    constructor(radius) {
        super("Circle", 0)
        this.radius = radius
    }
    calcArea() {
        // 1/2  * base * height 
        return Math.PI * (this.radius ** 2)
    }
    calcPerimeter() {

        return 2 * Math.PI * this.radius
    }
    toString() {
        return ` the ${this.name} Area = ${this.calcArea()} , Perimeter = ${this.calcPerimeter()}`
    }
}
// testing
let square = new Square(4)

console.log(square.toString());

let rectangle = new Rectangle(5, 4)

console.log(rectangle.toString());

let triangle = new Triangle(3, 5, 4)

console.log(triangle.toString());

let circle = new Circle(4)

console.log(circle.toString());