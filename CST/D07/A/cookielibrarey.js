function getCookie(cookieName) {
    if (typeof cookieName !== "string") {
        throw new Error("Cookie name must be a string");
    }
    if (!arguments.length) {
        throw new Error("Enter input don't make it empty  ")

    }
    else if (arguments.length > 1) {
        throw new Error("Please enter only one input ")
    }


    let cookieRecord = document.cookie.split(";") // [[key = value], []]

    for (let cookie of cookieRecord) {
        let cookieRow = cookie.trim().split("="); //[key , value]

        if (cookieRow[0] === cookieName) {
            console.log(cookieRow[1]);

            return cookieRow[1]; // stop will not continuo
        }
    }
    throw new Error("The cookie you entered does not exist");
}
function setCookie(cookieName, cookieValue, expiryDate = "") {
    if (typeof cookieName !== "string" && typeof cookieValue !== "string") {
        throw new Error("Cookie name and value must be a string");
    }
    if (!arguments.length) {
        throw new Error("Enter input don't make it empty  ")

    }
    else if (arguments.length > 3 || arguments.length < 2) {
        throw new Error("Please enter between 2 inputs or 3   third is optional  ")
    }

    let date = new Date(expiryDate);
    document.cookie = cookieName + "=" + cookieValue + ";expires=" + date.toUTCString() + ";path=/";
}

function deleteCookie(cookieName) {
    if (typeof cookieName !== "string") {
        throw new Error("Cookie name must be a string");
    }
    if (!arguments.length) {
        throw new Error("Enter input don't make it empty  ")

    }
    else if (arguments.length > 1) {
        throw new Error("Please enter only one input ")
    }

    let cookieRecord = document.cookie.split(";")

    for (let cookie of cookieRecord) {
        let cookieRow = cookie.trim().split("=");

        if (cookieRow[0] === cookieName) {
            let date = new Date("1990-1-1");
            document.cookie = cookieName + "=;expires=" + date.toUTCString() + ";path=/"
            return  // removed
        }
    }
    throw new Error("The cookie you entered does not exist");
}
function allCookieList() {
    let cookieRecord = document.cookie.split(";")
    let cookieObj = {}
    for (let cookie of cookieRecord) {
        let cookieRow = cookie.trim().split("=");
        cookieObj[cookieRow[0]] = cookieRow[1]
    }
    console.log(cookieObj);

}
function hasCookie(cookieName) {
    if (!arguments.length) {
        throw new Error("Enter input don't make it empty  ")

    }
    else if (arguments.length > 1) {
        throw new Error("Please enter only one input ")
    }
    let cookieRecord = document.cookie.split(";")

    for (let cookie of cookieRecord) {
        let cookieRow = cookie.trim().split("=")
        if (cookieRow[0] === cookieName) {
            console.log(true);
            return true;
        }
    }

    console.log(false);
    return false;

}





