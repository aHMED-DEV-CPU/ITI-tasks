let userName = getCookie("name")
let Visits = getCookie("counter")
let color = getCookie("color")
let gender = getCookie("gender")


let nameEle = document.getElementById("name")
let visitsEle = document.getElementById("visits")
// put values
nameEle.innerText = userName
visitsEle.innerText = Visits
//coloring
nameEle.style.color = color
visitsEle.style.color = color

if (gender == "male") {
    document.querySelector("img").src = "images/1.jpg"
} else {
    document.querySelector("img").src = "images/2.jpg"
}

