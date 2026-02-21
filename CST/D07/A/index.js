let inputs = document.querySelectorAll("input");


let Btn = document.getElementById("Register")
let counter = 0

Btn.addEventListener("click", function () {
    let enteredName = document.querySelector('input[name="name"]').value

    let storedName
    // check if registered before
    try {
        storedName = getCookie("name");
        counter = Number(getCookie("counter"));
    } catch {
        storedName = null;
        counter = 0;
    }

    // registered before
    if (storedName === enteredName) {
        counter++;
    } else {
        counter = 1;
    }

    // set cookies
    for (let input of inputs) {
        if (input.type === "radio" && !input.checked) continue;
        setCookie(input.name, input.value, "2027-1-1")
    }


    setCookie("counter", counter.toString(), "2027-01-01");
    location.href = "welcome.html"

}


)


