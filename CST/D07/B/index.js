// function that accepts only 2 parameters
function b1(p1, p2) {
    if (arguments.length != 2) {
        throw new Error("You have to  write 2 parameters ")
    }
    else {
        console.log("good work you entered 2 params");
    }
}

// b1(22)


function addNumbers() {
    if (arguments.length === 0) {
        throw new Error("You must Enter at least one number")
    }

    let sum = 0

    for (let i = 0; i < arguments.length; i++) {
        let arg = arguments[i]
        if (typeof arg !== "number") {
            throw new Error("All params must be numbers. Invalid value at index " + i + " : " + arg)
        }
        sum += arg;
    }
    console.log(sum);

    return sum;
}

addNumbers(1, 2, "dd", 55, 66)