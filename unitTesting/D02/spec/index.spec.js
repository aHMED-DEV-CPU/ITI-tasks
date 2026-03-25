import { MathUtils } from "../index.js";

describe("math function test", () => {

    let math;

    beforeEach(() => {
        math = new MathUtils();
    });

    describe("sum function", () => {

        it("should take 2 parameters", () => {
            expect(math.sum.length).toBe(2);
        });

        it("should return sum correctly", () => {
            expect(math.sum(5, 3)).toBe(8);
        });

        it("should throw error if params count is wrong", () => {
            expect(() => {
                math.sum(5);
            }).toThrowError("sum expects 2 parameters");
        });

        it("should throw error if datatype is wrong", () => {
            expect(() => {
                math.sum("5", 3);
            }).toThrowError("sum expects only numbers");
        });

    });

    describe("subtract function", () => {

        it("should take 2 parameters", () => {
            expect(math.subtract.length).toBe(2);
        });

        it("should subtract correctly", () => {
            expect(math.subtract(10, 5)).toBe(5);
        });

        it("should throw error if params count is wrong", () => {
            expect(() => {
                math.subtract(10);
            }).toThrowError("subtract expects 2 parameters");
        });

        it("should throw error if datatype is wrong", () => {
            expect(() => {
                math.subtract(10, "5");
            }).toThrowError("subtract expects only numbers");
        });

    });

    describe("multiply function", () => {

        it("should multiply correctly", () => {
            expect(math.multiply(5, 4)).toBe(20);
        });

        it("should return 0 if one number is zero", () => {
            expect(math.multiply(10, 0)).toBe(0);
        });

        it("should throw error if params count is wrong", () => {
            expect(() => {
                math.multiply(10);
            }).toThrowError("multiply expects 2 parameters");
        });

        it("should throw error if datatype is wrong", () => {
            expect(() => {
                math.multiply("10", 2);
            }).toThrowError("multiply expects only numbers");
        });

    });


    describe("divide function", () => {

        it("should divide correctly", () => {
            expect(math.divide(20, 4)).toBe(5);
        });

        it("should return Infinity when dividing by zero", () => {
            expect(math.divide(10, 0)).toBe(Infinity);
        });

        it("should throw error if params count is wrong", () => {
            expect(() => {
                math.divide(10);
            }).toThrowError("divide expects 2 parameters");
        });

        it("should throw error if datatype is wrong", () => {
            expect(() => {
                math.divide(10, "2");
            }).toThrowError("divide expects only numbers");
        });

    });


    describe("average function", () => {

        it("should return average correctly", () => {
            expect(math.average(10, 20)).toBe(15);
        });

        it("should throw error if params count is wrong", () => {
            expect(() => {
                math.average(10);
            }).toThrowError("average expects 2 parameters");
        });

        it("should throw error if datatype is wrong", () => {
            expect(() => {
                math.average("10", 20);
            }).toThrowError("average expects only numbers");
        });

    });


    describe("factorial function", () => {

        it("should return factorial correctly", () => {
            expect(math.factorial(5)).toBe(120);
        });

        it("should return 1 when number is 0", () => {
            expect(math.factorial(0)).toBe(1);
        });

        it("should throw error for negative values", () => {
            expect(() => {
                math.factorial(-5);
            }).toThrowError("There is no factorial for negative numbers");
        });

        it("should throw error if params count is wrong", () => {
            expect(() => {
                math.factorial(5, 2);
            }).toThrowError("factorial expects 1 parameter");
        });

        it("should throw error if datatype is wrong", () => {
            expect(() => {
                math.factorial("5");
            }).toThrowError("factorial expects only number");
        });

    });


    describe("checkPositivity function", () => {

        it("should return true for positive number", () => {
            expect(math.checkPositivity(5)).toBeTrue();
        });

        it("should return false for negative number", () => {
            expect(math.checkPositivity(-5)).toBeFalse();
        });

        it("should return true for zero", () => {
            expect(math.checkPositivity(0)).toBeTrue();
        });

        it("should throw error if params count is wrong", () => {
            expect(() => {
                math.checkPositivity();
            }).toThrowError("checkPositivity expects 1 parameter");
        });

        it("should throw error if datatype is wrong", () => {
            expect(() => {
                math.checkPositivity("5");
            }).toThrowError("checkPositivity expects only number");
        });

    });

});