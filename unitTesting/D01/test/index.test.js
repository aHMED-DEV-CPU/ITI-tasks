// import * as chai from "chai";
// const { assert, expect } = chai;
// chai.should();

import { capitalizeText, createArray, obj, obj1, obj2, CheckPositivity, Mult, obj4 } from "../index.js"
//   P1
describe("Test capitalize function", () => {
    it("test that the function takes a string  it will return a string ", () => {

        expect(typeof (capitalizeText("ahmed"))).equal("string")
    })
    it("function takes a string and return it after capitalize it", () => {
        expect(capitalizeText("ahmed")).equal("AHMED")
    })
    it("if the function takes number it will throw type error says parameter should be string", () => {
        expect(() => capitalizeText(7)).throw("parameter should be string")
    })
    it("this function accept one param only", () => {
        expect(capitalizeText.length).equal(1)
    })
})

//  P2
describe("Test createArr function", () => {
    it("the return value of type array", () => {
        createArray(3).should.a("array")
    })
    it("test if we pass 3 it will return array of length 3 and test it's include 1", () => {
        expect(createArray(3)).lengthOf(3).includes(1)
    })
    //try be assert 
    it("testing deep equal assert", () => {
        assert.deepEqual(createArray(3), [0, 1, 2])
    })


    it("should delay for 5 seconds", function (done) {

        this.timeout(6000);

        setTimeout(() => {

            const result = createArray(3);

            expect(result)
                .to.deep.equal([0, 1, 2]);

            done();

        }, 5000);

    });
    it("I'm pended until prev test finish ")
})

// P3
describe("check whether obj1 is equal to obj2 using expect , should and assert", () => {
    it("expect style", () => {

        expect(obj1)
            .to.deep.equal(obj2)

    })
    it("should style", () => {

        obj1.should.deep.equal(obj2)

    })
    it("assert style", () => {

        assert.deepEqual(
            obj1,
            obj2
        )

    })
})
//P4
describe("check the expected value using expect , should and assert if x = 4 , x = -1 and x=0 ", () => {

    it("expect  return true for positive number", () => {

        expect(CheckPositivity(5)).equal(true)

    })

    it("should return false for negative number", () => {

        CheckPositivity(-3).should.equal(false)

    })


    it("assert return false for zero", () => {

        assert.equal(CheckPositivity(0), false)

    })
})

//P5
describe("Mult function tests", () => {

    it("should make sure that x > 0", () => {

        let x = 5
        assert.isAbove(x, 0);
    });

    it("should make sure returned number is above zero", () => {


        assert.isAbove(Mult(2), 0);
    });

});

//P6
describe("obj4 tests", () => {

    it("should check a.b[0] includes {x:1}", () => {
        assert.deepInclude(
            obj4.a.b[0],
            { x: 1 },
        );
    });

});

//P8
function validateInputs(numberValue, stringValue) {

    return {
        numberValid:
            numberValue !== "" &&
            !isNaN(numberValue),

        stringValid:
            stringValue !== "" &&
            isNaN(stringValue)
    };
}



const form = document.getElementById("myForm");
const message = document.getElementById("message");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const numberValue =
        document.getElementById("numInput").value;

    const stringValue =
        document.getElementById("strInput").value;

    const result = validateInputs(
        numberValue,
        stringValue
    );

    if (result.numberValid && result.stringValid) {
        message.innerText = "Valid Input ";
    } else {
        message.innerText = "Invalid Input ";
    }
});


describe("Form Validation Tests", () => {

    it("should return true for valid inputs", () => {

        const result = validateInputs("10", "Ahmed");

        assert.isTrue(result.numberValid);
        assert.isTrue(result.stringValid);

    });


    it("should fail when number input is empty", () => {

        const result = validateInputs("", "Ahmed");

        assert.isFalse(result.numberValid);

    });


    it("should fail when string input is empty", () => {

        const result = validateInputs("10", "");

        assert.isFalse(result.stringValid);

    });


    it("should fail when both inputs are empty", () => {

        const result = validateInputs("", "");

        assert.isFalse(result.numberValid);
        assert.isFalse(result.stringValid);

    });


    it("should fail when number input contains text", () => {

        const result = validateInputs("abc", "Ahmed");

        assert.isFalse(result.numberValid);

    });


    it("should fail when string input contains numbers", () => {

        const result = validateInputs("10", "123");

        assert.isFalse(result.stringValid);

    });

});