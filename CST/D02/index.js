// 1.1
var message = prompt("Enter your message");
for (let i = 1; i <= 6; i++) {
    document.write("<h" + i + ">" + message + "</h" + i + ">")
}

////////////////////////////////////1.2
// Write a script that takes from the user n values and returns their sum,
//     when he enters 0 or sum exceeds 100,


function getValues() {
    var sum = 0;
    while (sum <= 100) {
        let input = prompt("enter a number");
        let number = Number(input);

        // check if input is a number
        if (isNaN(number)) {
            console.error("Is not a number ");
            break;
        }

        // Stop if user enters 0
        if (number === 0) {
            break;
        }
        sum += number;
        if (sum > 100) {
            console.log(sum);

            break;
        }
    }
}
getValues()



// 1.3 //////////////////////////////////
//display the maximum


var fNumber = prompt("Enter the first number ")
var SNumber = prompt("Enter the second number ")
function maximumValue(fNumber, SNumber) {
    let fN = Number(fNumber);
    let sN = Number(SNumber);
    isNaN(fN) || isNaN(sN) ? console.error("One of the two values is not a number")
        : console.log(fN > sN ? fN : sN);

}
maximumValue(fNumber, SNumber)



// ///////////////////////////////////////1.4
/**
 * Ask the user to enter three numerical values x, y and z.
 * The script should check if x is divisible by y only or z only or both y and z.
 */


var fNumber = prompt("Enter the first number ")
var SNumber = prompt("Enter the second number ")
var tNumber = prompt("Enter the second number ")
function isDivisble(n1, n2, n3) {
    let x = Number(n1);
    let y = Number(n2);
    let z = Number(n3);
    if (isNaN(x) || isNaN(y) || isNaN(z)) {
        console.error("One of the three values is not a number")
    }
    else {
        if (x % y == 0 && x % z == 0) {
            console.log(x + " is divisble by " + y + " and " + z);
        } else if (x % y == 0) {
            console.log(x + " is divisble by " + y);
        } else if (x % z == 0) {
            console.log(x + " is divisble by " + z);
        } else {
            console.warn("both numbers " + y + " and " + z + " are not divisble by " + x);
        }
    }

}
isDivisble(fNumber, SNumber, tNumber)



///////////////////////////////////////1.5
/**
 * Number multiple of 3: 3,6,9
 *  Number multiple of 5: 5,10 total sum is 33
 */


var fNumber = prompt("Enter the first number ")
var SNumber = prompt("Enter the second number ")
function getRange(n1, n2) {
    let x = Number(n1);
    let y = Number(n2);

    if (isNaN(x) || isNaN(y)) {
        console.error("One of the two values is not a number");
        return;
    }

    var sum = 0;
    var multipleBy3 = "";
    var multipleBy5 = "";

    for (let i = x; i <= y; i++) {
        if (i % 3 === 0) {
            multipleBy3 += (multipleBy3 === "" ? i : "," + i);
            sum += i;
        }

        if (i % 5 === 0) {
            multipleBy5 += (multipleBy5 === "" ? i : "," + i);
            sum += i;
        }
    }
    console.log(
        "Number multiple of 3: " + multipleBy3 + "\n" +
        "Number multiple of 5: " + multipleBy5 + "\n" +
        "Total sum is " + sum
    );


}
getRange(fNumber, SNumber)




/////////////////////////////////////////1.6



let rows = Number(prompt("Enter number of rows"));

if (isNaN(rows) || rows <= 0) {
    console.error("Invalid input");
} else {
    let stars = "";
    for (let i = 1; i <= rows; i++) {
        stars += "*";
        console.log(stars);
    }
}

///////////////////////////////////1.7
/**
 * Ask the user to enter 3 values where x and y are two numeric values while z is a
 *  string value. The script should display the following:
 */

let x = Number(prompt("Enter x (number):"));
let y = Number(prompt("Enter y (number):"));
let z = prompt("Enter z (odd / even / no):").toLowerCase();
function showRange() {



    if (isNaN(x) || isNaN(y) || (z !== "odd" && z !== "even" && z !== "no")) {
        console.error("Invalid input. Please re-enter correct values.");
        return;
    }

    let sum = 0;
    let result = "";
    //asc or dsc
    let order = x < y ? 1 : -1;

    console.log(" Numbers:");

    for (let i = x; order === 1 ? i <= y : i >= y; i += order) {

        if (
            z === "no" ||
            (z === "odd" && i % 2 !== 0) ||
            (z === "even" && i % 2 === 0)
        ) {
            console.log(i);
            result += i + ",";
            sum += i;
        }
    }
    console.log(result);
    console.log("Total Sum = " + sum);
}

showRange();
