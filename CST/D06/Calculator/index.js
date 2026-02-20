let textInput = document.getElementById("Answer")


let typing = ""

// let inputs  = document.querySelectorAll(type = [button])

function EnterNumber(numberedInput) {
    typing += numberedInput
    textInput.value = typing
}

function EnterOperator(operatorInput) {
    typing += operatorInput
    textInput.value = typing
}

// function EnterEqual() {
//     textInput.value = eval(typing)
// }


function EnterEqual() {
    let storedNumbers = 0;
    let currentNumber = "";
    let firstOperator = true;
    let operator = "+";

    for (const char of typing) {
        if (!isNaN(char) || char === ".") {
            currentNumber += char;
        } else {
            if (firstOperator) {
                storedNumbers = Number(currentNumber);
                firstOperator = false;
            } else {
                switch (operator) {
                    case "+":
                        storedNumbers += Number(currentNumber);
                        break;
                    case "-":
                        storedNumbers -= Number(currentNumber);
                        break;
                    case "*":
                        storedNumbers *= Number(currentNumber);
                        break;
                    case "/":
                        storedNumbers /= Number(currentNumber);
                        break;
                }
            }
            operator = char;
            currentNumber = "";
        }
    }


    if (currentNumber !== "") {
        switch (operator) {
            case "+":
                storedNumbers += Number(currentNumber);
                break;
            case "-":
                storedNumbers -= Number(currentNumber);
                break;
            case "*":
                storedNumbers *= Number(currentNumber);
                break;
            case "/":
                storedNumbers /= Number(currentNumber);
                break;
        }
    }

    textInput.value = storedNumbers;
    typing = storedNumbers.toString();
}
function Backspace() {
    
    typing = typing.slice(0, -1);
    
    textInput.value = typing;
}
function EnterClear() {
    textInput.value = ""
    typing = ""

}






