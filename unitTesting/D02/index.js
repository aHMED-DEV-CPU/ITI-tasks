export function MathUtils() { }

MathUtils.prototype.sum = function (number1, number2) {

    if (arguments.length !== 2) {
        throw new Error("sum expects 2 parameters");
    }

    if (typeof number1 !== "number" || typeof number2 !== "number") {
        throw new Error("sum expects only numbers");
    }

    return number1 + number2;
};

MathUtils.prototype.subtract = function (number1, number2) {

    if (arguments.length !== 2) {
        throw new Error("subtract expects 2 parameters");
    }

    if (typeof number1 !== "number" || typeof number2 !== "number") {
        throw new Error("subtract expects only numbers");
    }

    return number1 - number2;
};

MathUtils.prototype.multiply = function (number1, number2) {

    if (arguments.length !== 2) {
        throw new Error("multiply expects 2 parameters");
    }

    if (typeof number1 !== "number" || typeof number2 !== "number") {
        throw new Error("multiply expects only numbers");
    }

    return number1 * number2;
};

MathUtils.prototype.divide = function (number1, number2) {

    if (arguments.length !== 2) {
        throw new Error("divide expects 2 parameters");
    }

    if (typeof number1 !== "number" || typeof number2 !== "number") {
        throw new Error("divide expects only numbers");
    }

    return number1 / number2;
};

MathUtils.prototype.average = function (number1, number2) {

    if (arguments.length !== 2) {
        throw new Error("average expects 2 parameters");
    }

    if (typeof number1 !== "number" || typeof number2 !== "number") {
        throw new Error("average expects only numbers");
    }

    return (number1 + number2) / 2;
};

MathUtils.prototype.factorial = function (number) {

    if (arguments.length !== 1) {
        throw new Error("factorial expects 1 parameter");
    }

    if (typeof number !== "number") {
        throw new Error("factorial expects only number");
    }

    if (number < 0) {
        throw new Error("There is no factorial for negative numbers");
    }

    if (number === 0 || number === 1) {
        return 1;
    }

    return number * this.factorial(number - 1);
};

MathUtils.prototype.checkPositivity = function (number) {

    if (arguments.length !== 1) {
        throw new Error("checkPositivity expects 1 parameter");
    }

    if (typeof number !== "number") {
        throw new Error("checkPositivity expects only number");
    }

    return number >= 0;
};

